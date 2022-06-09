// import useName from "./customHooks/useName";
import FurnitureDashboard from "./components/FurnitureDashboard";
import PCDashboard from "./components/PCDaschboard";
import "./styles.css";

export default function App() {
  // const myuser = useName("hi");
  return (
    <div className="App">
      <h3> This is an example of custom hooks</h3>
      {/* {myuser} */}
      <FurnitureDashboard />
      <br />
      <br />
      <PCDashboard />
    </div>
  );
}
