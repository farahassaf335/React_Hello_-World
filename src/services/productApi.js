import axiosClient from "./axiosClient";

const getLatestProducts = (limit = 12, page = 1) => {
  return axiosClient.get("/products", {
    params: {
      _sort: "meta.createdAt",
      _order: "desc",
      _limit: limit,
      _page: page,
    },
  });
};

export const ProductService = {
  getLatestProducts,
};
