import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

const BASE_URL = `http://192.168.0.105:4000/api`;

// Products
const PRODUCT_KEY = {
  PRODUCT_LIST: "PRODUCT_LIST",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
  PRODUCT_CREATE: "PRODUCT_CREATE",
  PRODUCT_DELETE: "PRODUCT_DELETE",
};

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    // console.log("data" + response.data);
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

//searchProducts

const fetchProductsSearch = async (searchKey) => {
  console.log(searchKey);

  try {
    const response = await axios.get(
      `${BASE_URL}/products/search/${searchKey || ""}`
    );
    console.log(searchKey);
    // console.log("data" + response.data);
    // console.log("data", response);
    return response.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export function useProductsSearch(searchKey) {
  return useQuery({
    queryKey: [PRODUCT_KEY.PRODUCT_LIST, searchKey],
    queryFn: () => fetchProductsSearch(searchKey),
    initialData: [],
  });
}
