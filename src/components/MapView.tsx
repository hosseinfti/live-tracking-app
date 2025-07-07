import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import type { LatLngExpression } from "leaflet";

const defaultIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface DriverMarker {
  id: number;
  name: string;
  position: LatLngExpression;
}

const mockDriverMarkers: DriverMarker[] = [
  {
    id: 1,
    name: "امیر جعفری",
    position: [35.6892, 51.389],
  },
  {
    id: 2,
    name: "زهره حیدری",
    position: [35.6997, 51.337],
  },
];

function MapView() {
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {mockDriverMarkers.map((driver) => (
        <Marker key={driver.id} position={driver.position} icon={defaultIcon}>
          <Popup>{driver.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
