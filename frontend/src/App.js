import NavBar from "./layout/NavBar";
import Booking from "./layout/Booking";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Booking />
      </div>
    </div>
  );
}

export default App;
