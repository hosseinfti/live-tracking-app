import { useEffect, useState } from "react";
import DriverList from "./components/DriverList";
import DriverModal from "./components/DriverModal.";
import MapView from "./components/MapView";
import type { DriverInfo } from "./types/driver";
import { getAllDrivers } from "./api/drivers";

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
  const [drivers, setDrivers] = useState<DriverInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDriverId, setSelectedDriverId] = useState<number | null>(null);
  const selectedDriver = drivers.find((d) => d.id === selectedDriverId) || null;

  useEffect(() => {
    getAllDrivers()
      .then(setDrivers)
      .catch((err) => {
        console.error("خطا در دریافت راننده‌ها", err);
        alert("مشکلی در دریافت لیست راننده‌ها رخ داد.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {loading ? (
        <div style={{ padding: "2rem", fontWeight: "bold" }}>
          در حال بارگذاری...
        </div>
      ) : (
        <>
          <div style={{ flex: 1 }}>
            <MapView drivers={drivers} selectedId={selectedDriverId} />
          </div>
          <div style={{ width: "400px", overflowY: "auto" }}>
            <DriverList
              drivers={drivers}
              selectedId={selectedDriverId}
              onSelect={setSelectedDriverId}
            />
          </div>
        </>
      )}

      <DriverModal
        driver={selectedDriver}
        isOpen={selectedDriver !== null}
        onClose={() => setSelectedDriverId(null)}
      />
    </div>
  );
}

export default App;
