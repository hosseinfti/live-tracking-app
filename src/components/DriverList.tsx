import DriverCard from "./DriverCard";
import type { DriverInfo } from "../types/driver";

interface Props {
  drivers: DriverInfo[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}
function DriverList({ drivers, selectedId, onSelect }: Props) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>راننده‌ها</h2>

      {drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          selected={driver.id === selectedId}
          onClick={() => onSelect(driver.id)}
        />
      ))}
    </div>
  );
}

export default DriverList;
