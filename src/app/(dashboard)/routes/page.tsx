"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MainMapCover from "@/components/maps/MainMapCover";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RoutesPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Routes</CardTitle>
              <CardDescription>See all your routes here.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="grid grid-cols-3">
            <CardContent className="col-span-2 pt-6">
              <MainMapCover />
            </CardContent>
            <CardHeader className="col-span-1 pl-0">
              <CardTitle>Route Details</CardTitle>
              <CardDescription> #RO43333</CardDescription>
              <div>
                <Badge className="flex w-fit flex-row space-x-1 bg-green-500 p-1 pr-2">
                  <Check className="h-4 w-4 text-white" />
                  <p className="text-white">Optimised Route</p>
                </Badge>
              </div>
              <div className="mt-8">
                <div className="flex flex-row justify-between">
                  <p className="text-sm text-muted-foreground">
                    Starting Point
                  </p>
                  <p className="text-sm font-medium">Chennai</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-sm text-muted-foreground">Destination</p>
                  <p className="text-sm font-medium">Kochi</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="text-sm font-medium">1200 km</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Ongoing Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row space-x-4">
                <div>
                  <p className="text-sm text-muted-foreground">Route ID</p>
                  <p className="text-sm font-medium">RO43333</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Driver</p>
                  <p className="text-sm font-medium">John Doe</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
