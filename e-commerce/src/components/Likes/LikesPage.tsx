import { emptyLikes } from "../../data/data";
import * as Icon from "react-bootstrap-icons";

function LikesPage() {
  function handleDelete(e: any) {
    console.log(e.currentTarget.id);
  }
  return (
    <div className="w-full text-[#f7583e] mt-[5vh] text-center flex flex-col items-center gap-[3vh] pb-[30px]">
      <h1>Your likes</h1>
      {emptyLikes.map((product) => {
        return (
          <div
            key={product.id}
            className="flex gap-[20px] min-w-[70vw] max-w-[600px] bg-[white] p-2 rounded items-center h-[15vh]"
          >
            <p className="text-black m-0">{product.id}.</p>
            <img className="text-black m-0" src="img" alt="img" />
            <p className="flex-1 m-0">{product.title}</p>
            <p className="font-bold m-0">${product.price}</p>
            <button>
              <Icon.HeartbreakFill
                id={product.title}
                onClick={handleDelete}
                size={20}
                className="opacity-[0.5] hover:opacity-[1]"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default LikesPage;
