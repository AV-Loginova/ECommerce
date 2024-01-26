import { categoriesCatalogue } from "../../data/data";
import { Link } from "react-router-dom";
import VideoBar from "./videoBar";

function Home() {
  return (
    <div className="flex flex-col items-center bg-[#f6f6f6]">
      <VideoBar />
      <h1 className="text-[#f7583e] mt-[2vh] mb-4">BinoShop</h1>
      <p className="w-[90vw] text-center md:w-[60vw]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eius
        et perspiciatis vel nesciunt est maxime nemo repellendus labore in odit
        eveniet inventore, sunt vero{" "}
        <b className="text-[#f7583e] text-lg">ducimus </b>
        ipsum distinctio fugit dicta qui quaerat hic laudantium! Similique
        corrupti pariatur autem
        <b className="text-[#f7583e] text-lg"> repellat</b>, nostrum quis eaque
        accusantium consequatur ipsam nisi esse explicabo doloremque maxime.
      </p>
      <section className="flex gap-[10px] flex-col md:flex-row">
        {categoriesCatalogue.map((category) => (
          <Link key={category.id} to={"/catalogue"} className="no-underline">
            <figure className="md:w-[20vw] bg-[#f7583e] w-[90vw]">
              <img
                src={category.img}
                className="hover:opacity-[1] opacity-[0.5] transition-all duration-500"
                alt={category.title}
              />
              <figcaption className="text-center bg-[#f7583e] text-white text-bold text-2xl">
                {category.title}
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
