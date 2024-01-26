import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="h-[15vh] md:h-[12vh] bg-[#f7583e] flex justify-between items-center">
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
        <li>
          <Icon.Cart size={35} color="#f6f6f6" className="mb-[5px]" />
        </li>
        <li>
          <Icon.Heart size={30} color="#f6f6f6" />
        </li>

        <li
          className="text-2xl bg-[#f6f6f6] rounded-[20px] px-2 text-[#f7583e] border-[1px]
        font-bold py-1 hover:bg-[#f7583e] hover:text-[#f6f6f6] hover:border-[1px] hover:border-[#f6f6f6]
        transition-all duration-500"
        >
          Log In
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
