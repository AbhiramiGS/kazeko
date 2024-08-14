"use client";

import React from "react";
import * as L from "leaflet"; // eslint-disable-line
import {
  MapContainer,
  TileLayer,
  // Marker,
  // Popup,
  Polyline,
  Marker,
  Popup,
  // GeoJSON,
  // CircleMarker,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";

const MainMap = ({ zoom }: { zoom: number }) => {
  const centerPoints: L.LatLngTuple = [11.505, 78.966];

  const line: L.LatLngTuple[] = [
    [13.084, 80.289],
    [12.971, 77.593],
    [11.005, 76.966],
    [9.967, 76.268],
  ];

  return (
    <div className="rounded-md border">
      <MapContainer
        // eslint-disable-next-line
        center={centerPoints}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-[400px] w-full rounded-md"
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          className="rounded-md"
        />

        <Polyline
          pathOptions={{
            color: "red",
          }}
          positions={line}
        />
        {line.map((point, index) => {
          // eslint-disable-next-line
          const x = point[0];
          // eslint-disable-next-line
          const y = point[1];
          return (
            // eslint-disable-next-line
            <Marker key={index} position={point}>
              <Popup>
                {/* // eslint-disable-next-line */}
                {x}, {y}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MainMap;
