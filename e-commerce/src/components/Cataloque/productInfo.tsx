import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions as likeActions } from "../../store/likes/Likes.slice";
import { actions as cartActions } from "../../store/cart/cart.slice";
import { CatalogueData } from "../../data/data";
import { RootState } from "../../store/store";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductInfo({ props }: any) {
  const [data, setData] = useState<CatalogueData[]>([]);
  const like: CatalogueData[] = useSelector((state: RootState) => state.likes);
  const cart: CatalogueData[] = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
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
    e.preventDefault();
    navigate("/catalogue");
  }

  return (
    <>
      {data.map((item) => {
        const isExistsLikes = like.some((p) => p.id === item.id);
        const isExistsCart = cart.some((p) => p.id === item.id);
        if (item.id.toString() === id) {
          return (
            <div
              key={item.id}
              className="mx-[20px] lg:flex-row bg-[#f6f6f6] flex md:flex-col flex-col 
  justify-center sm:items-center gap-[20px] text-[#f7583e] relative mt-[100px] lg:mt-0"
            >
              <Link to={"/catalogue"} onClick={handleClose}>
                <Icon.X
                  size={60}
                  color="black"
                  className="absolute top-[-40px] right-[-12px]"
                />
              </Link>
              <div className="lg:w-[30vw] lg:h-[52vh] flex justify-center items-center bg-white w-[90vw] rounded-lg p-2">
                <img
                  src={item.image}
                  className="px-[20px] bg-[white]  object-scale-down max-w-[300px] max-h-[50vh]"
                />
              </div>

              <div className="flex flex-col md:w-[60vw] w-full items-center text-center">
                <h1>{item.title}</h1>

                <p className="text-black text-center">{item.description}</p>
                <div className="text-black text-[12px] italic flex flex-col flex-1 items-center">
                  <span className="flex"> {getStars(item.rating.rate)}</span>
                  {item.rating.count} votes
                </div>
                <p className="font-bold text-[20px]">${item.price}</p>
                <div className="flex gap-[1px] mb-[20px]">
                  <button
                    className="bg-[#f7583e] w-[120px] p-2 flex justify-center rounded-l-lg hover:bg-[#e55039] "
                    onClick={() => dispatch(likeActions.toggleLikes(item))}
                  >
                    {isExistsLikes ? (
                      <Icon.HeartFill color="white" size={30} />
                    ) : (
                      <Icon.Heart color="white" size={30} />
                    )}
                  </button>
                  <button
                    className="bg-[#f7583e] w-[120px] p-2 flex justify-center rounded-r-lg hover:bg-[#e55039]"
                    onClick={() => dispatch(cartActions.toggleCart(item))}
                  >
                    {isExistsCart ? (
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
      })}
    </>
  );
}

export default ProductInfo;
