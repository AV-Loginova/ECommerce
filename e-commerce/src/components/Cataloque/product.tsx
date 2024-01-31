import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

function Product({ props, onClick }: any) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  function handleClick() {
    onClick(props);
  }
  return (
    <figure className="w-[80vw] min-w-[180px] h-[45vh] md:w-[15vw] bg-[white] rounded-t-lg flex flex-col items-center">
      <button
        className="absolute ml-[45vw]  md:ml-[12vw] mt-[2vh] transition-all"
        onClick={handleLike}
      >
        {like ? (
          <Icon.HeartFill color="#f7583e" size={20} />
        ) : (
          <Icon.Heart color="#f7583e" size={20} />
        )}
      </button>

      <img
        onClick={handleClick}
        src={props.image}
        alt={props.title}
        className="p-[20px] h-[30vh] "
      />
      <figcaption
        onClick={handleClick}
        className="w-[100%] bg-[#f7583e] rounded-b-lg text-white h-[15vh] flex text-center items-center justify-center p-1"
        id={props.title}
      >
        {props.title}
      </figcaption>
    </figure>
  );
}

export default Product;
