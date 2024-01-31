import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

function ProductInfo({ props, close }: any) {
  const [like, setLike] = useState(false);
  const [cart, setCart] = useState(false);

  function handleCart() {
    setCart(!cart);
  }
  function handleLike() {
    setLike(!like);
  }

  function getStars(n: number) {
    let count = 0;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (n >= 1) {
        arr.push(
          <Icon.StarFill key={`filled${count}`} color="#ffd45e" size={20} />
        );
      } else if (n <= 0.5 && n > 0) {
        arr.push(
          <Icon.StarHalf key={`filled${count}`} color="#ffd45e" size={20} />
        );
      } else {
        arr.push(<Icon.Star key={`empty${count}`} color="#c2c2c2" size={20} />);
      }
      n--;
      count++;
    }
    return arr;
  }

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    close(e);
  }

  return (
    <div
      className="py-[50vh] lg:py-[10vh] h-[100vh] md:h-[60vh] bg-[#f6f6f6] flex md:flex-row flex-col 
    justify-center sm:items-center gap-[20px] text-[#f7583e] md:mt-[10vh] "
    >
      <button onClick={handleClose}>
        <Icon.X
          size={60}
          color="black"
          className="absolute md:top-[18vh] top-[18vh] right-[1vw]"
        />
      </button>

      <img
        src={props.image}
        className="px-[20px] bg-[white] rounded-lg object-scale-down max-w-[300px]"
      />

      <div className="flex flex-col md:w-[60vw] w-full items-center text-center">
        <h1>{props.title}</h1>

        <p className="text-black text-center">{props.description}</p>
        <div className="text-black text-[12px] italic flex flex-col flex-1 items-center">
          <span className="flex"> {getStars(props.rating.rate)}</span>
          {props.rating.count} votes
        </div>
        <p className="font-bold text-[20px]">${props.price}</p>
        <div className="flex gap-[1px] mb-[20px]">
          <button
            className="bg-[#f7583e] w-[120px] p-2 flex justify-center rounded-l-lg hover:bg-[#e55039] "
            onClick={handleLike}
          >
            {like ? (
              <Icon.HeartFill color="white" size={30} />
            ) : (
              <Icon.Heart color="white" size={30} />
            )}
          </button>
          <button
            className="bg-[#f7583e] w-[120px] p-2 flex justify-center rounded-r-lg hover:bg-[#e55039]"
            onClick={handleCart}
          >
            {cart ? (
              <Icon.CartCheckFill color="white" size={30} />
            ) : (
              <Icon.Cart color="white" size={30} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
