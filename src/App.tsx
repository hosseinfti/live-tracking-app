import { useEffect, useRef, useState } from "react";
import DriverList from "./components/DriverList";
import DriverModal from "./components/DriverModal";
import MapView from "./components/MapView";
import type { DriverInfo } from "./types/driver";
import { getAllDrivers } from "./api/drivers";
import { connectToMQTT } from "./mqtt/client";
import type { MqttMessage } from "./types/mqtt";

function App() {
  const [drivers, setDrivers] = useState<DriverInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDriverId, setSelectedDriverId] = useState<number | null>(null);
  const selectedDriver = drivers.find((d) => d.id === selectedDriverId) || null;
  const mqttDataRef = useRef<Map<number, MqttMessage>>(new Map());

  useEffect(() => {
    getAllDrivers()
      .then(setDrivers)
      .catch((err) => {
        console.error("خطا در دریافت راننده‌ها", err);
        alert("مشکلی در دریافت لیست راننده‌ها رخ داد.");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!drivers.length) return;

    const client = connectToMQTT((message: MqttMessage) => {
      mqttDataRef.current.set(message.driverId, message);

      setDrivers((prev) =>
        prev.map((d) =>
          d.id === message.driverId
            ? {
                ...d,
                position: [
                  message.position.latitude,
                  message.position.longitude,
                ],
              }
            : d
        )
      );
    });

    return () => {
      client.end();
    };
  }, [drivers.length]);

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
              mqttDataRef={mqttDataRef}
            />
          </div>
        </>
      )}

      <DriverModal
        driver={selectedDriver}
        mqttDataRef={mqttDataRef}
        isOpen={!!selectedDriver}
        onClose={() => setSelectedDriverId(null)}
      />
    </div>
  );
}

export default App;
