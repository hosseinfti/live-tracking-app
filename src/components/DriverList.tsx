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
    fullName: "نادر غلامی",
    phoneNumber: "09351234567",
    packetNumber: "PKT-2025-1234",
    carName: "پژو 206",
    licensePlate: "12-234-56",
  },
];

function DriverList() {
  return (
    <div style={{ padding: "1rem" }}>
      {mockDrivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} />
      ))}
    </div>
  );
}

export default DriverList;
