import { useEffect, useState } from "react";
import Product from "./product";
import { CatalogueData } from "../../data/data";
import ProductInfo from "./productInfo";
import CatalogueNav from "./catalogueNav";

type Props = { props: string };

function Catalogue({ props }: Props) {
  const [data, setData] = useState<CatalogueData[]>([]);
  const [info, setInfo] = useState<string>();
  const [category, setCategory] = useState(props);

  useEffect(() => {
    async function fetchData() {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  function handleInfo(val: string) {
    setInfo(val);
  }

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    e && setInfo("");
  }

  function handleCategory(val: string) {
    setCategory(val);
  }

  return (
    <div className=" bg-[#f6f6f6] flex flex-col flex-1">
      <CatalogueNav
        onClick={handleCategory}
        onClose={handleClose}
        category={props}
      />
      <div className="flex flex-wrap gap-[20px] my-[30px] px-[10vh] justify-center">
        {info ? (
          <ProductInfo props={info} close={handleClose} />
        ) : (
          data
            .filter((product) =>
              category
                ? product.category == category
                : product.category !== "electronics"
            )
            .map((product) => {
              return (
                <Product
                  key={product.id}
                  props={product}
                  onClick={handleInfo}
                />
              );
            })
        )}
      </div>
    </div>
  );
}

export default Catalogue;
