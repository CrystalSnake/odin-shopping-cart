function fetchData() {
  return fetch(
    'https://fakestoreapi.com/products/category/electronics?limit=5'
  ).then((res) => res.json());
}

export default fetchData;
