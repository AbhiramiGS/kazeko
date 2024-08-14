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

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    price: 300,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description 4",
    price: 400,
  },
];

const ProductsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>See all your products here.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Demand Forecasting</CardTitle>
              <CardDescription>
                See what products would be in demand in the future.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="col-span-4">
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
      </div>
    </div>
  );
};

export default ProductsPage;
