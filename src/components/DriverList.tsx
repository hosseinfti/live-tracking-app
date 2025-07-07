import { useState } from "react";
import DriverCard from "./DriverCard";
import type { DriverInfo } from "../types/driver";
import DriverModal from "./DriverModal.";

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
    fullName: "زهره حیدری",
    phoneNumber: "09351122345",
    packetNumber: "PKT-2025-9832",
    carName: "پژو 206",
    licensePlate: "12-345-67",
  },
];

function DriverList() {
  const [selectedDriver, setSelectedDriver] = useState<DriverInfo | null>(null);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>راننده‌ها</h2>

      {mockDrivers.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          selected={driver.id === selectedDriver?.id}
          onClick={() => setSelectedDriver(driver)}
        />
      ))}

      <DriverModal
        driver={selectedDriver}
        isOpen={selectedDriver !== null}
        onClose={() => setSelectedDriver(null)}
      />
    </div>
  );
}

export default DriverList;
