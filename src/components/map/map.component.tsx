import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import marker from "../../assets/icon-location.svg";
import { Icon } from "leaflet";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [38, 48],
});
import "leaflet/dist/leaflet.css";

interface MapProps {
  position: [number, number];
}

const Map = ({ position }: MapProps) => {
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
