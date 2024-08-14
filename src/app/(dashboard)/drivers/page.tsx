import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DriversPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Drivers</CardTitle>
              <CardDescription>See all your drivers here.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriversPage;
