import type { DriverInfo } from "../types/driver";

interface Props {
  driver: DriverInfo;
}

function DriverCard({ driver }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>{driver.fullName}</h3>
      <p style={{ margin: "0.25rem 0" }}>📞 {driver.phoneNumber}</p>
      <p style={{ margin: "0.25rem 0" }}>📦 {driver.packetNumber}</p>
      <p style={{ margin: "0.25rem 0" }}>
        🚗 {driver.carName} - {driver.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
