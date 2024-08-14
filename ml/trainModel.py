import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
import pickle

# Load the data from your CSV file
df = pd.read_csv('demand_prediction_data.csv')  

# Encode categorical variables (e.g., location, category)
df = pd.get_dummies(df, columns=['location', 'category'])

# Save the columns used during training
training_columns = df.drop(columns=['demand']).columns

# Split data into features (X) and target (y)
X = df[training_columns]
y = df['demand']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)
r_squared = r2_score(y_test, y_pred)

print(f'Mean Absolute Error: {mae:.2f}')
print(f'R-squared: {r_squared:.2f}')

# Save the model and the training columns to files
model_filename = 'demand_prediction_model.pkl'
with open(model_filename, 'wb') as file:
    pickle.dump({'model': model, 'training_columns': training_columns}, file)

print(f'Model saved to {model_filename}')
