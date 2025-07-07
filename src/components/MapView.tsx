import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import type { DriverInfo } from "../types/driver";

interface Props {
  drivers: DriverInfo[];
  selectedId: number | null;
}

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

      {drivers.map((driver) => (
        <Marker key={driver.id} position={driver.position as LatLngExpression}>
          <Popup>{driver.fullName}</Popup>
        </Marker>
      ))}
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
