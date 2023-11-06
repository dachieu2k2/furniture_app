import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = `http://localhost:4000/api`;

// Products
const PRODUCT_KEY = {
  PRODUCT_LIST: "PRODUCT_LIST",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
  PRODUCT_CREATE: "PRODUCT_CREATE",
  PRODUCT_DELETE: "PRODUCT_DELETE",
};

const fetchProducts = async () => {
  console.log("run here?");

  try {
    const response = await axios.get(`http://192.168.0.105:4000/api/products`);
    console.log("data" + response.data);
    // console.log("data", response);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export function useProducts() {
  return useQuery({
    queryKey: [PRODUCT_KEY.PRODUCT_LIST],
    queryFn: fetchProducts,
  });
}

// ETC

export async function fetchProduct() {
  console.log("fetchProducts");

  return movies.slice(0, 100);
  // .map((movie) => ({ title: movie.title, year: movie.year }));
}

export async function fetchMovie(id) {
  console.log("fetchProduct", id);

  await delay(200 + Math.floor(Math.random() * 2000));

  const result = movies.filter((item) => item._id === id);

  if (result.length == 0) {
    throw new Error("Movie not found");
  }
  return result[0];
}
