import React from "react";

interface RequestData {
  demand: number;
}
export default async function TestPage() {
  const sampleData = {
    store: {
      store_id: 102,
      location: "urban",
    },
    product: {
      product_id: 1004,
      category: "clothing",
      price: 14.76,
    },
    day_of_week: 2,
    is_holiday: false,
    temperature: 2.2,
    moving_average_sales: 62.37,
  };

  const res = await fetch("http://localhost:8000/predict-demand", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sampleData),
  });

  if (!res.ok) {
    return <div>No response from API</div>;
  }

  const requestData = (await res.json()) as RequestData;

  return <div>Predicted Data: {requestData.demand}</div>;
}
