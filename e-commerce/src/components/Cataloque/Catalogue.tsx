function Catalogue() {
  const url = "https://fakestoreapi.com/products/";
  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res));
  return <div></div>;
}

export default Catalogue;
