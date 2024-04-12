import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { CatalogueData } from "../../data/data";
import { RootState } from "../../store/store";

function NavBar() {
  const location = useLocation();
  const like: CatalogueData[] = useSelector((state: RootState) => state.likes);
  const cart: CatalogueData[] = useSelector((state: RootState) => state.cart);
  return (
    <nav className="h-[12vh] max-[500px]:h-[10vh] bg-[#f7583e] max-[1000px]:h-[15vh] flex justify-between items-center ">
      <div>
        <Link
          to={"/"}
          className="flex items-start p-2 no-underline text-white text-[40px]"
        >
          <Icon.Binoculars color="#f6f6f6" size={50} />
          Bino
        </Link>
      </div>
      <ul className="flex mr-[10px] items-center gap-[10px] mt-[15px]">
        <li className="relative">
          <div
            className="bg-white w-[15px] h-[15px] absolute top-[25px] rounded-md 
          border-[1px] border-[#F7583E] text-sm flex justify-center items-center"
          >
            {cart.length}
          </div>
          <Link to={"cart"}>
            {location.pathname == "/cart" ? (
              <Icon.CartFill size={35} color="#f6f6f6" className="mb-[5px]" />
            ) : (
              <Icon.Cart size={35} color="#f6f6f6" className="mb-[5px]" />
            )}
          </Link>
        </li>
        <li className="relative">
          <div
            className="bg-white w-[15px] h-[15px] absolute top-[20px] rounded-md 
          border-[1px] border-[#F7583E] text-sm flex justify-center items-center"
          >
            {like?.length}
          </div>
          <Link to={"likes"}>
            {location.pathname == "/likes" ? (
              <Icon.HeartFill size={30} color="#f6f6f6" />
            ) : (
              <Icon.Heart size={30} color="#f6f6f6" />
            )}
          </Link>
        </li>

        <li>
          <Link
            to={"/login"}
            className="text-2xl bg-[#f6f6f6] rounded-[20px] px-2 text-[#f7583e] border-[1px]
        font-bold py-1 hover:bg-[#f7583e] hover:text-[#f6f6f6] hover:border-[1px] hover:border-[#f6f6f6]
        transition-all duration-500 cursor-pointer no-underline"
          >
            {" "}
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
