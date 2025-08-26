import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export const LocationMap = () => {
  // Static adrresse for the church
  const churchPosition = [48.167749, 16.307323]; // Vienna

  return (
    <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={churchPosition}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={churchPosition}>
          <Popup>
            <div className="text-sm font-semibold text-[#4b2e2e]">
              Iranian Church
            </div>
            <div className="text-gray-600">
              <ul> Hetzendorfer strasse 98</ul>
              <ol>1120 Wien</ol>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
