import axiosClient from "./axiosClient";

const getAllProducts = () => {
  return axiosClient.get("/products");
};

export const ProductService = {
  getAllProducts,
};
