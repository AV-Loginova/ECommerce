import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/likes/Likes.slice";
import { CatalogueData } from "../../data/data";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

function Product({ props }: any) {
  const like: CatalogueData[] = useSelector((state: RootState) => state.likes);
  const dispatch = useDispatch();
  const isExists = like.some((item) => item.id === props.id);

  return (
    <div
      className="w-[80vw] min-w-[180px] h-[45vh] md:w-[15vw] 
  bg-[white] rounded-t-lg flex flex-col items-center cursor-pointer"
    >
      <button
        className="absolute ml-[45vw]  md:ml-[12vw] mt-[2vh] transition-all"
        onClick={() => {
          dispatch(actions.toggleLikes(props));
        }}
      >
        {isExists ? (
          <Icon.HeartFill color="#f7583e" size={20} />
        ) : (
          <Icon.Heart color="#f7583e" size={20} />
        )}
      </button>
      <Link to={`/catalogue/${props.id}`}>
        <img
          src={props.image}
          alt={props.title}
          className="p-[20px] h-[30vh] "
        />
      </Link>

      <Link
        to={`/catalogue/${props.id}`}
        className=" no-underline w-[100%] bg-[#f7583e] rounded-b-lg text-white h-[15vh] flex text-center items-center justify-center p-1"
        id={props.title}
      >
        {props.title}
      </Link>
    </div>
  );
}

export default Product;
