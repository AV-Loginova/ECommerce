// import * as Icon from "react-bootstrap-icons";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Catalogue from "./components/Cataloque/Catalogue";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f6f6f6]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
