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

const sampleShipyards = [
  {
    id: 1,
    name: "Cochin Shipyard Ltd.",
    location: "Cochin",
    totalDocks: 120,
    utilizedDocks: 78,
    utilization: 0.65,
    workForce: 1000,
  },
  {
    id: 2,
    name: "Chennai Port Trust",
    location: "Chennai",
    totalDocks: 90,
    utilizedDocks: 62,
    utilization: 0.7,
    workForce: 1000,
  },
  {
    id: 3,
    name: "JD Shipyard",
    location: "Mumbai",
    totalDocks: 120,
    utilizedDocks: 78,
    utilization: 0.65,
    workForce: 1000,
  },
  {
    id: 4,
    name: "Ennore Port",
    location: "Ennore",
    totalDocks: 120,
    utilizedDocks: 78,
    utilization: 0.65,
    workForce: 1000,
  },
];

const ShipyardsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipyards</CardTitle>
              <CardDescription>See all your shipyards here.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        {sampleShipyards.map((shipyard) => (
          <Card className="transition hover:scale-105" key={shipyard.id}>
            <CardHeader>
              <CardDescription>Shipyard Name</CardDescription>
              <CardTitle>{shipyard.name}</CardTitle>
              <Badge className="w-fit text-sm">
                <MapPin className="mr-1 h-4 w-4" /> {shipyard.location}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Total Docks: {shipyard.totalDocks}</p>
              <p className="text-sm">
                Utilized Docks: {shipyard.utilizedDocks}
              </p>
              <p className="text-sm">Workforce: {shipyard.workForce}</p>
            </CardContent>
            <CardFooter>
              
              <p className="text-sm">
                Utilization: {shipyard.utilization * 100}%
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShipyardsPage;
