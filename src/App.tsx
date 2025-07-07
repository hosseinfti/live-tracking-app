import { useState } from "react";
import DriverList from "./components/DriverList";
import DriverModal from "./components/DriverModal.";
import MapView from "./components/MapView";
import type { DriverInfo } from "./types/driver";

const mockDrivers: DriverInfo[] = [
  {
    id: 1,
    fullName: "امیر جعفری",
    phoneNumber: "09182190051",
    packetNumber: "PKT-2025-9740",
    carName: "کیا سراتو",
    licensePlate: "81-629-54",
    position: [35.6892, 51.389],
  },
  {
    id: 2,
    fullName: "زهره حیدری",
    phoneNumber: "09351122345",
    packetNumber: "PKT-2025-9832",
    carName: "پژو 206",
    licensePlate: "12-345-67",
    position: [35.6997, 51.337],
  },
];
function App() {
  const [selectedDriverId, setSelectedDriverId] = useState<number | null>(null);
  const selectedDriver =
    mockDrivers.find((d) => d.id === selectedDriverId) || null;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <MapView drivers={mockDrivers} selectedId={selectedDriverId} />
      </div>
      <div style={{ width: "400px", overflowY: "auto" }}>
        <DriverList
          drivers={mockDrivers}
          selectedId={selectedDriverId}
          onSelect={setSelectedDriverId}
        />
      </div>
      <DriverModal
        driver={selectedDriver}
        isOpen={selectedDriver !== null}
        onClose={() => setSelectedDriverId(null)}
      />
    </div>
  );
}

export default App;
