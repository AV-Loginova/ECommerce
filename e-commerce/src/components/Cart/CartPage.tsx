import { useDispatch, useSelector } from "react-redux";
import { CatalogueData, emptyLikes } from "../../data/data";
import * as Icon from "react-bootstrap-icons";
import { actions } from "../../store/cart/cart.slice";

export interface RootState {
  cart: CatalogueData[];
}
function CartPage() {
  const cart: CatalogueData[] = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  function totalPrice(data: CatalogueData[]) {
    let price = 0;
    data.forEach((product) => {
      price += product.price;
    });
    return price;
  }
  return (
    <div className="w-full text-[#f7583e] mt-[5vh] text-center flex flex-col items-center mb-[30px]">
      <h1 className="mb-[3vh]">Your Cart</h1>
      {cart.map((product: CatalogueData, index: number) => {
        return (
          <div
            key={product.id}
            className="flex gap-[20px] min-w-[70vw] max-w-[600px] bg-[white] p-2 rounded items-center h-[15vh] mt-[2vh]"
          >
            <p className="text-black m-0">{index + 1}.</p>
            <img
              className="text-black m-0 max-h-[15vh] p-2"
              src={product.image}
              alt="img"
            />
            <p className="flex-1 m-0">{product.title}</p>
            <p className="font-bold m-0">${product.price}</p>
            <button>
              <Icon.CartXFill
                size={20}
                className="opacity-[0.5] hover:opacity-[1]"
                onClick={() => dispatch(actions.toggleCart(product))}
              />
            </button>
          </div>
        );
      })}
      <p className="bg-[white] p-3 rounded-b-lg font-bold w-[150px]  z-index-[1] mt-[-10px]">
        Total: ${totalPrice(cart)}
      </p>
      <button className="bg-[#f7583e] text-[white] p-3 w-[100px] rounded hover:bg-[#e55039] font-bold text-xl">
        BUY
      </button>
    </div>
  );
}
export default CartPage;
