import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import Optional
import pickle
import pandas as pd

app = FastAPI()
class Store(BaseModel):
    store_id: int
    location: str

# Product Model
class Product(BaseModel):
    product_id: int
    category: str
    price: float

# Demand Prediction Features Model
class DemandFeatures(BaseModel):
    store: Store
    product: Product
    day_of_week: int = Field(..., ge=0, le=6)  # 0 = Monday, 6 = Sunday
    is_holiday: bool
    temperature: Optional[float] = None  # For weather impact if relevant
    moving_average_sales: float  # Sales average over past weeks

@app.get("/") 
async def root():
    return {"message": "Hello from FastAPI!"}

@app.post("/predict-demand")
def predict(data: DemandFeatures):
    # Shape of input data
    # store_id,location,product_id,category,price,day_of_week,is_holiday,temperature,moving_average_sales,demand
    with open('demand_prediction_model.pkl', 'rb') as file:
        saved_data = pickle.load(file)
        loaded_model = saved_data['model']
        training_columns = saved_data['training_columns']

    # Convert input data to a DataFrame
    new_data = pd.DataFrame({
        'store_id': [data.store.store_id],
        'location': [data.store.location],
        'product_id': [data.product.product_id],
        'category': [data.product.category],
        'price': [data.product.price],
        'day_of_week': [data.day_of_week],
        'is_holiday': [data.is_holiday],
        'temperature': [data.temperature if data.temperature is not None else 0.0],
        'moving_average_sales': [data.moving_average_sales]
    })

    # Encode the new data in the same way as the training data
    new_data = pd.get_dummies(new_data)

    # Align the new data with the training columns
    new_data = new_data.reindex(columns=training_columns, fill_value=0)

    # Predict the demand
    predicted_demand = loaded_model.predict(new_data)
    print(f'Predicted Demand: {predicted_demand[0]:.2f}')
    return {'demand': predicted_demand[0]}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)