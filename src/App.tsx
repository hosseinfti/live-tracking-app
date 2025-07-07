import DriverList from "./components/DriverList";
import MapView from "./components/MapView";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <MapView />
      </div>
      <div style={{ width: "400px", overflowY: "auto" }}>
        <DriverList />
      </div>
    </div>
  );
}

export default App;
