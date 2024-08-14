import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerAuthSession } from "@/server/auth";

const DashboardPage = async () => {
  const session = await getServerAuthSession();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Hello {session?.user.name}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipments</CardDescription>
                    <CardTitle>28</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Products</CardDescription>
                    <CardTitle>545</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Deliveries</CardDescription>
                    <CardTitle>40</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Drivers</CardDescription>
                    <CardTitle>83</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Card className="flex flex-row">
            <CardContent className="flex flex-row p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2373364974546!2d80.29090287490774!3d13.08413938724164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f83c4dce21d%3A0x57cabad0ac5e38f2!2sCHENNAI%20PORT!5e0!3m2!1sen!2sin!4v1723611723937!5m2!1sen!2sin"
                width="500"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                // referrePolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-4">
                <p className="text-2xl font-bold">Incoming Shipment</p>
                <div className="mt-4">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm">Shipment ID: 12345</p>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Shipments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>12345</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>32145</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>32133</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>52534</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>22444</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>42444</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Shipment ID</CardDescription>
                    <CardTitle>85847</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm">ETA: 12:00 PM</p>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
