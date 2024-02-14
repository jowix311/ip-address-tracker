import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import iconLocation from "../../assets/icon-location.svg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  position: [number, number];
}

const myIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [38, 48],
});

const Map = ({ position }: MapProps) => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
