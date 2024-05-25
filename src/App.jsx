import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavItems />
      <div style={{ backgroundColor: "gray" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
