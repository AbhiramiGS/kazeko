import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sampleShipments = [
  {
    id: 32145,
    eta: "12:00 PM",
    sourcePort: "Shanghai",
    destination: "Mumbai",
  },
  {
    id: 32133,
    eta: "11:00 AM",
    sourcePort: "Dubai",
    destination: "Mumbai",
  },
  {
    id: 52534,
    eta: "10:00 AM",
    sourcePort: "New York",
    destination: "Chennai",
  },
  {
    id: 22444,
    eta: "9:00 AM",
    sourcePort: "Singapore",
    destination: "Bangalore",
  },
];

const ShipmentsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipments</CardTitle>
              <CardDescription>See all your shipments here.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-4">
            {sampleShipments.map((shipment) => (
              <Card className="transition hover:scale-105" key={shipment.id}>
                <CardHeader>
                  <CardDescription>Shipment ID</CardDescription>
                  <CardTitle>{shipment.id}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Source Port: {shipment.sourcePort}</p>
                  <p className="text-sm">Destination: {shipment.destination}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm">ETA: {shipment.eta}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsPage;
