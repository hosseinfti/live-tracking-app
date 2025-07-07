import type { DriverInfo } from "../types/driver";

export async function getAllDrivers(): Promise<DriverInfo[]> {
  const res = await fetch("http://95.38.60.148:8080/api/drivers");
  if (!res.ok) throw new Error("Failed to fetch drivers");
  const json = await res.json();

  return json.map((item: any) => ({
    id: item.driver.id,
    fullName: item.driver.fullName,
    phoneNumber: item.driver.phoneNumber,
    packetNumber: item.driver.packetNumber,
    carName: item.car.name,
    licensePlate: item.car.licensePlate,
    position: [35.6892, 51.389],
  }));
}
