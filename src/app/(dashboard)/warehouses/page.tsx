import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const sampleWarehouses = [
  {
    id: 1,
    name: "Delhi Warehouse",
    location: "Delhi",
    capacity: 50000, // in square feet
    utilizedSpace: 35000, // in square feet
    utilization: 0.7,
    workForce: 150,
  },
  {
    id: 2,
    name: "Mumbai Warehouse",
    location: "Mumbai",
    capacity: 60000,
    utilizedSpace: 42000,
    utilization: 0.7,
    workForce: 200,
  },
  {
    id: 3,
    name: "Chennai Warehouse",
    location: "Chennai",
    capacity: 45000,
    utilizedSpace: 27000,
    utilization: 0.6,
    workForce: 120,
  },
  {
    id: 4,
    name: "Kolkata Warehouse",
    location: "Kolkata",
    capacity: 55000,
    utilizedSpace: 38500,
    utilization: 0.7,
    workForce: 180,
  },
];

const WarehousesPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Warehouses</CardTitle>
              <CardDescription>See all your warehouses here.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        {sampleWarehouses.map((warehouse) => (
          <Card className="transition hover:scale-105" key={warehouse.id}>
            <CardHeader>
              <CardDescription>Warehouse Name</CardDescription>
              <CardTitle>{warehouse.name}</CardTitle>
              <Badge className="w-fit text-sm">
                <MapPin className="mr-1 h-4 w-4" /> {warehouse.location}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Capacity: {warehouse.capacity} sq ft</p>
              <p className="text-sm">
                Utilized Space: {warehouse.utilizedSpace} sq ft
              </p>
              <p className="text-sm">Workforce: {warehouse.workForce}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Utilization: {warehouse.utilization}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WarehousesPage;
