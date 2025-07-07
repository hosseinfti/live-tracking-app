import { useState } from "react";
import DriverCard from "./DriverCard";
import type { DriverInfo } from "../types/driver";

const mockDrivers: DriverInfo[] = [
  {
    id: 1,
    fullName: "امیر جعفری",
    phoneNumber: "09182190051",
    packetNumber: "PKT-2025-9740",
    carName: "کیا سراتو",
    licensePlate: "81-629-54",
  },
  {
    id: 2,
    fullName: "زهرا نادری",
    phoneNumber: "09353334444",
    packetNumber: "PKT-2025-9832",
    carName: "پژو 206",
    licensePlate: "24-317-83",
  },
];

function DriverList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>راننده‌ها</h2>

      {mockDrivers.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          selected={driver.id === selectedId}
          onClick={() => setSelectedId(driver.id)}
        />
      ))}
    </div>
  );
}

export default DriverList;
