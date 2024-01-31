import { emptyLikes } from "../../data/data";
import * as Icon from "react-bootstrap-icons";

function CartPage() {
  function totalPrice(data: any) {
    let price = 0;
    data.forEach((product: any) => {
      price += product.price;
    });
    return price;
  }
  return (
    <div className="w-full text-[#f7583e] mt-[5vh] text-center flex flex-col items-center mb-[30px]">
      <h1 className="mb-[3vh]">Your Cart</h1>
      {emptyLikes.map((product) => {
        return (
          <div
            key={product.id}
            className="flex gap-[20px] min-w-[70vw] max-w-[600px] bg-[white] p-2 rounded items-center h-[15vh] mt-[2vh]"
          >
            <p className="text-black m-0">{product.id}.</p>
            <img className="text-black m-0" src="img" alt="img" />
            <p className="flex-1 m-0">{product.title}</p>
            <p className="font-bold m-0">${product.price}</p>
            <button>
              <Icon.CartXFill
                size={20}
                className="opacity-[0.5] hover:opacity-[1]"
              />
            </button>
          </div>
        );
      })}
      <p className="bg-[white] p-3 rounded-b-lg font-bold w-[150px]  z-index-[1] mt-[-10px]">
        Total: ${totalPrice(emptyLikes)}
      </p>
      <button className="bg-[#f7583e] text-[white] p-3 w-[100px] rounded hover:bg-[#e55039] font-bold text-xl">
        BUY
      </button>
    </div>
  );
}
export default CartPage;
