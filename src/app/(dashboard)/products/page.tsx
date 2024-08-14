import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const sampleProducts = [
  {
    id: 1001,
    name: "Apple",
    description: "Description 1",
    price: 100,
  },
  {
    id: 1004,
    name: "Banana",
    description: "Description 2",
    price: 200,
  },
  {
    id: 1005,
    name: "Oranges",
    description: "Description 3",
    price: 300,
  },
  {
    id: 1007,
    name: "Cashew Nuts",
    description: "Description 4",
    price: 400,
  },
];

const ProductsPage = () => {
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

  return (
    <div>
      <div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>See all your products here.</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-2">
          <div className="grid grid-cols-4 gap-4">
            {sampleProducts.map((product) => (
              <div className="col-span-1" key={product.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Price: ₹{product.price}</p>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <Button>Edit</Button>
                    <Button variant={"destructive"}>Delete</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Demand Forecasting</CardTitle>
              <CardDescription>
                See what products would be in demand in the future
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="mt-2 grid w-full grid-cols-4 gap-4">
            {sampleProducts.map(async (product) => {
              const res = await fetch("http://localhost:8000/predict-demand", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...sampleData,
                  product: {
                    ...sampleData.product,
                    product_id: product.id,
                  },
                }),
              });
              let data = "loading";

              if (!res.ok) {
                data = "Failed To Fetch";
              }

              const demand = (await res.json()) as {
                demand: number;
              };
              return (
                <div key={product.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p>Demand</p>{" "}
                        <div className="flex">
                          <TrendingUp className="stroke-green-400 mr-3" />{" "}
                          <span>{demand.demand}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="space-x-2">
                      <Button>Edit</Button>
                      <Button variant={"destructive"}>Delete</Button>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
