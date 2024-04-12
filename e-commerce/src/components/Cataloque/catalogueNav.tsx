import { useState } from "react";
import { categoriesCatalogue } from "../../data/data";

function CatalogueNav({ onClick, onClose, category }: any) {
  const [chosen, setChosen] = useState(category);
  function handleCategory(e: React.MouseEvent<HTMLElement>) {
    onClick(e.currentTarget.id);
    onClose(e);
    setChosen(e.currentTarget.id);
  }
  return (
    <ul className="flex justify-center gap-[2vw] text-l h-[5vh] ">
      <li
        id=""
        onClick={handleCategory}
        className={` ${!chosen && "font-bold text-[#f7583e] text-xl"}
         hover:text-[#f7583e] hover:text-2xl transition-all duration-[300ms] p-2`}
      >
        ALL
      </li>
      {categoriesCatalogue.map((category) => (
        <li
          onClick={handleCategory}
          key={category.id}
          id={category.description}
          className={`${
            chosen == category.description && "font-bold text-[#f7583e] text-xl"
          } hover:text-[#f7583e] hover:text-xl transition-all duration-[300ms] p-2`}
        >
          {category.title}
        </li>
      ))}
    </ul>
  );
}

export default CatalogueNav;
