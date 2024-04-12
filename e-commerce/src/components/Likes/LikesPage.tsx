import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/likes/Likes.slice";

function LikesPage() {
  const like = useSelector((state) => state.likes);
  const dispatch = useDispatch();

  return (
    <div className=" min-h-[80vh] w-full text-[#f7583e] mt-[5vh] text-center flex flex-col items-center gap-[3vh] pb-[30px]">
      <h1>Your likes</h1>
      {like.length !== 0 ? (
        like.map((product, index) => {
          return (
            <div
              key={product.id}
              className="flex gap-[20px] min-w-[70vw] max-w-[600px] bg-[white] p-2 rounded items-center h-[15vh]"
            >
              <p className="text-black m-0">{index + 1}.</p>
              <img
                className="text-black max-h-[15vh] py-2"
                src={product.image}
                alt="img"
              />
              <p className="flex-1 m-0 text-black font-bold">{product.title}</p>
              <p className="font-bold m-0">${product.price}</p>
              <button>
                <Icon.HeartbreakFill
                  id={product.title}
                  onClick={() => dispatch(actions.toggleLikes(product))}
                  size={20}
                  className="opacity-[0.5] hover:opacity-[1]"
                />
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-[#777777] text-2xl flex-1">Likes aren't found</p>
      )}
      {}
    </div>
  );
}
export default LikesPage;
