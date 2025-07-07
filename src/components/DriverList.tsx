import DriverCard from "./DriverCard";
import type { DriverInfo } from "../types/driver";
import type { MqttMessage } from "../types/mqtt";

interface Props {
  drivers: DriverInfo[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  mqttDataRef: React.MutableRefObject<Map<number, MqttMessage>>;
}
function DriverList({ drivers, selectedId, onSelect, mqttDataRef }: Props) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>راننده‌ها</h2>

      {drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          selected={driver.id === selectedId}
          onClick={() => onSelect(driver.id)}
          mqttData={mqttDataRef.current.get(driver.id) || null}
        />
      ))}
    </div>
  );
}

export default DriverList;
