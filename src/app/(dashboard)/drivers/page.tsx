import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4"></div>

        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Driver Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Total Drivers</CardDescription>
                    <CardTitle>12345</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Currently Driving</CardDescription>
                    <CardTitle>32145</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="transition hover:scale-105">
                  <CardHeader>
                    <CardDescription>Drivers on hold</CardDescription>
                    <CardTitle>32133</CardTitle>
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
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                // referrePolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-4">
                <p className="text-2xl font-bold">Driver Details</p>
                <div className="mt-4">
                  <div className="flex flex-col justify-between">
                    <p className="text-sm tracking-wider">Driver ID: 12345</p>
                    <p className="text-sm">Name: Arumugam</p>
                    <p className="text-sm">ETA: 12:00 PM</p>
                    <p className="text-sm">Health: Normal</p>
                    <p className="text-sm">Speed: 60 km/hr</p>
                    <p className="text-sm">Fuel: 50%</p>
                    <p className="text-sm">Location: Chennai Port</p>
                    <p className="text-sm">Destination: Ennore Port</p>
                    <p className="text-sm">Route: </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Truck Details</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Card className="">
              <CardHeader>
                <CardDescription>Trucks currently Running</CardDescription>
                <CardTitle>28</CardTitle>
              </CardHeader>
            </Card>
            <Card className="">
              <CardHeader>
                <CardDescription>Trucks in service</CardDescription>
                <CardTitle>545</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriversPage;
