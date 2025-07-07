import mqtt from "mqtt";
import type { MqttMessage } from "../types/mqtt";

const BROKER_URL = "ws://95.38.60.148:9001";
const TOPIC = "drivers/location";

export function connectToMQTT(onMessage: (data: MqttMessage) => void) {
  const client = mqtt.connect(BROKER_URL);

  client.on("connect", () => {
    console.log("MQTT connected");
    client.subscribe(TOPIC);
  });

  client.on("message", (_, payload) => {
    try {
      const parsed: MqttMessage = JSON.parse(payload.toString());
      onMessage(parsed);
    } catch (err) {
      console.error("MQTT parse error:", err);
    }
  });

  client.on("error", (err) => {
    console.error("MQTT error:", err);
  });

  return client;
}
