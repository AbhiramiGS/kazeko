import numpy as np
import pandas as pd

# Set random seed for reproducibility
np.random.seed(42)

# Number of samples
n_samples = 1000

# Generating store and product data
store_ids = np.random.choice([101, 102, 103, 104], size=n_samples)
locations = np.random.choice(['urban', 'suburban', 'rural'], size=n_samples)
product_ids = np.random.randint(1000, 1010, size=n_samples)
categories = np.random.choice(['electronics', 'clothing', 'grocery'], size=n_samples)
prices = np.round(np.random.uniform(5, 100, size=n_samples), 2)

# Generate features
days_of_week = np.random.randint(0, 7, size=n_samples)
is_holiday = np.random.choice([0, 1], size=n_samples)
temperatures = np.round(np.random.uniform(-10, 35, size=n_samples), 1)
moving_average_sales = np.round(np.random.uniform(20, 200, size=n_samples), 2)

# Generating demand with some random noise and plausible patterns
demand = (
    10 * (prices / 10) * (1 + (is_holiday * 0.3)) * (1 - (temperatures / 50))
    + moving_average_sales * 0.5
    + np.random.normal(0, 5, n_samples)
).astype(int)

# Create DataFrame
df = pd.DataFrame({
    'store_id': store_ids,
    'location': locations,
    'product_id': product_ids,
    'category': categories,
    'price': prices,
    'day_of_week': days_of_week,
    'is_holiday': is_holiday,
    'temperature': temperatures,
    'moving_average_sales': moving_average_sales,
    'demand': demand
})

# Save the data to CSV or use it directly
df.to_csv('demand_prediction_data.csv', index=False)
print(df.head())
