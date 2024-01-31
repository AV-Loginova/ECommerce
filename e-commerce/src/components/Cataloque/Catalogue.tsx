import { useEffect, useState } from "react";
import Product from "./product";
import { CatalogueData } from "../../data/data";
import ProductInfo from "./productInfo";

type Props = { props: string };

function Catalogue({ props }: Props) {
  const [data, setData] = useState<CatalogueData[]>([]);
  const [info, setInfo] = useState<string>();

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
    console.log(props);
  }

  return (
    <div className="h-[100vh] bg-[#f6f6f6] flex flex-wrap gap-[20px] mt-[30px] px-[10vh] justify-center">
      {info ? (
        <ProductInfo props={info} close={handleClose} />
      ) : (
        data
          .filter((product) => product.category == props)
          .map((product) => {
            return (
              <Product key={product.id} props={product} onClick={handleInfo} />
            );
          })
      )}
    </div>
  );
}

export default Catalogue;
