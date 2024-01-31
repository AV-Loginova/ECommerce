// import * as Icon from "react-bootstrap-icons";
import Home from "./components/Home/Home";
import { Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Catalogue from "./components/Cataloque/Catalogue";
import { useState } from "react";
import LikesPage from "./components/Likes/LikesPage";
import CartPage from "./components/Cart/CartPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("");
  function handleCategory(val: string) {
    setCategory(val);
  }
  return (
    <div className="min-h-[100vh] w-[100vw] overflow-visible bg-[#f6f6f6] flex flex-col">
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
      <Footer />
    </div>
  );
}

export default App;
