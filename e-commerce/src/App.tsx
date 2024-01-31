// import * as Icon from "react-bootstrap-icons";
import Home from "./components/Home/Home";
import { Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Catalogue from "./components/Cataloque/Catalogue";
import { useState } from "react";
import LikesPage from "./components/Likes/LikesPage";
import CartPage from "./components/Cart/CartPage";

function App() {
  const [category, setCategory] = useState("");
  function handleCategory(val: string) {
    console.log(val);
    setCategory(val);
  }
  return (
    <div className="w-[100vw] h-full bg-[#f6f6f6]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home categoryType={handleCategory} />} />
        <Route
          path="/catalogue"
          element={<Catalogue props={category} />}
        ></Route>
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
