import type { DriverInfo } from "../types/driver";

interface Props {
  driver: DriverInfo;
  selected?: boolean;
  onClick?: () => void;
}

function DriverCard({ driver, selected = false, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        border: selected ? "2px solid #007bff" : "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow: selected
          ? "0 0 8px rgba(0, 123, 255, 0.4)"
          : "0 1px 3px rgba(0,0,0,0.1)",
        backgroundColor: selected ? "#f0f8ff" : "#fff",
        cursor: "pointer",
        transition: "all 0.2s ease",
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
