import DriverList from "./components/DriverList";
import MapView from "./components/MapView";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* نقشه سمت چپ */}
      <div style={{ flex: 1, borderLeft: "1px solid #ddd" }}>
        <MapView />
      </div>

      {/* لیست راننده‌ها سمت راست */}
      <div style={{ width: "400px", overflowY: "auto" }}>
        <DriverList />
      </div>
    </div>
  );
}

export default App;
