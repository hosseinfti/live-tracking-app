export interface MqttMessage {
  driverId: number;
  time: string;
  messagePriority: number;
  position: {
    latitude: number;
    longitude: number;
    cardinalPoint: number | null;
    speed: number;
  };
  device: {
    batteryLevel: number;
    gpsSignal: number | null;
  };
  vehicle: {
    ignition: boolean;
    fuelConsumption: number;
  };
}
