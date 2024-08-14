import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
