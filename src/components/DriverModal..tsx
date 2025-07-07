import type { DriverInfo } from "../types/driver";

interface Props {
  driver: DriverInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

function DriverModal({ driver, isOpen, onClose }: Props) {
  if (!isOpen || !driver) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          width: "400px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{driver.fullName}</h2>
        <p>شماره تماس: {driver.phoneNumber}</p>
        <p>شماره بسته: {driver.packetNumber}</p>
        <p>خودرو: {driver.carName}</p>
        <p>پلاک: {driver.licensePlate}</p>

        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          بستن
        </button>
      </div>
    </div>
  );
}

export default DriverModal;
