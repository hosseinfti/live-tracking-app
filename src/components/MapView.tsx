import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import type { DriverInfo } from "../types/driver";
import L from "leaflet";

interface Props {
  drivers: DriverInfo[];
  selectedId: number | null;
}
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const selectedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapView({ drivers, selectedId }: Props) {
  const selectedDriver = drivers.find((d) => d.id === selectedId);

  return (
    <MapContainer
      center={selectedDriver?.position || [35.6892, 51.389]}
      zoom={selectedDriver ? 15 : 12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {drivers.map((driver) => {
        const isSelected = driver.id === selectedId;
        return (
          <Marker
            key={driver.id}
            position={driver.position as LatLngExpression}
            icon={isSelected ? selectedIcon : defaultIcon}
          >
            <Popup>{driver.fullName}</Popup>
          </Marker>
        );
      })}
      <ZoomToMarker center={selectedDriver?.position} />
    </MapContainer>
  );
}

function ZoomToMarker({ center }: { center?: LatLngExpression }) {
  const map = useMap();
  if (center) map.setView(center, 15);
  return null;
}

export default MapView;
