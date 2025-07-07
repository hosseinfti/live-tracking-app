import type { DriverInfo } from "../types/driver";
import type { MqttMessage } from "../types/mqtt";
import {
  renderCardinalPoint,
  renderGpsSignal,
  renderPriority,
} from "../utils/renderHelpers";

interface Props {
  driver: DriverInfo | null;
  mqttDataRef: React.MutableRefObject<Map<number, MqttMessage>>;
  isOpen: boolean;
  onClose: () => void;
}

function DriverModal({ driver, isOpen, onClose, mqttDataRef }: Props) {
  if (!isOpen || !driver) return null;

  const mqttData = driver ? mqttDataRef.current.get(driver.id) || null : null;

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

        {mqttData ? (
          <>
            <p>آخرین زمان: {new Date(mqttData.time).toLocaleString()}</p>
            <p> GPS Signal: {renderGpsSignal(mqttData.device.gpsSignal)}</p>
            <p> باتری: {mqttData.device.batteryLevel}%</p>
            <p> سرعت: {mqttData.position.speed} km/h</p>
            <p> مصرف سوخت: {mqttData.vehicle.fuelConsumption}L</p>
            <p> موتور روشن: {mqttData.vehicle.ignition ? "بله" : "خیر"}</p>
            <p>Priority: {renderPriority(mqttData.messagePriority)}</p>
            <p>
              cardinalPoint:{" "}
              {renderCardinalPoint(mqttData.position.cardinalPoint)}
            </p>
          </>
        ) : (
          <p style={{ color: "#888" }}>اطلاعات زنده‌ای موجود نیست.</p>
        )}

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
