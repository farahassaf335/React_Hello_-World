import axiosClient from "./axiosClient";

const searchProduct = (query) => {
  return axiosClient.get(`/products/search?q=${query}`);
};

export const SearchService = {
  searchProduct,
};
