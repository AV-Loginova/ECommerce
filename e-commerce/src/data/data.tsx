import woman from "../assets/woman.jpeg";
import man from "../assets/man.jpeg";
import jewelery from "../assets/jewelery.jpeg";

export const categoriesCatalogue: category[] = [
  {
    id: 1,
    title: "FEMALE",
    img: woman,
  },
  {
    id: 2,
    title: "MALE",
    img: man,
  },
  {
    id: 3,
    title: "JEWELERY",
    img: jewelery,
  },
];

type category = {
  id: number;
  title: string;
  img: string;
};
