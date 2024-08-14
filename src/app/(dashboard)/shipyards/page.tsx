import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      </div>
    </div>
  );
};

export default ShipyardsPage;
