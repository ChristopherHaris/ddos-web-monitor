import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const LeafletMap = () => {
  const position = [-8.611081, 116.231915];
  const customIcon = new L.Icon({
    iconUrl: "/assets/marker-icon-2x.png",
    shadowUrl: iconShadow,
    iconSize: [20, 32], // Adjust the size of the icon
    iconAnchor: [16, 32], // Adjust the anchor point
    popupAnchor: [0, -32], // Adjust the popup anchor
  });

  const MapLink =
    "https://www.google.com/maps/place/DDOROCARE+(Aksi+Indonesia+Lestari+Fondation)/@-8.6110761,116.2293348,17z/data=!3m1!4b1!4m6!3m5!1s0x2dcdb764cd4d4505:0x9cce798bf660692b!8m2!3d-8.6110814!4d116.2319151!16s%2Fg%2F11s6d0x3tl?entry=ttu";

  return (
    <MapContainer
      center={position}
      zoom={20}
      className="w-full h-[300px] md:h-[500px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">DDOROCARE</h1>
            <Image
              src="/assets/logo2.png"
              width={60}
              height={10}
              alt="Ddorocare"
            />
          </div>

          <p className="text-base">
            Dusun Esot, Desa Sintung, Kecamatan Pringgarata, Kabupaten Lombok
            Tengah, NTB
          </p>
          <br />
          <a href={MapLink} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
