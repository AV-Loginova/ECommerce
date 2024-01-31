import woman from "../assets/woman.jpeg";
import man from "../assets/man.jpeg";
import jewelery from "../assets/jewelery.jpeg";

export const categoriesCatalogue: category[] = [
  {
    id: 1,
    title: "FEMALE",
    img: woman,
    description: "women's clothing",
  },
  {
    id: 2,
    title: "MALE",
    img: man,
    description: "men's clothing",
  },
  {
    id: 3,
    title: "JEWELERY",
    img: jewelery,
    description: "jewelery",
  },
];

type category = {
  id: number;
  title: string;
  img: string;
  description: string;
};

export type CatalogueData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const emptyLikes = [
  {
    id: 1,
    title: "item 1",
    price: 100,
  },
  {
    id: 2,
    title: "item 2",
    price: 200,
  },
  {
    id: 3,
    title: "item 3",
    price: 300,
  },
  {
    id: 4,
    title: "item 4",
    price: 400,
  },
];
