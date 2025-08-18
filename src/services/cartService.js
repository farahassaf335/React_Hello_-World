import axiosClient from './axiosClient';

const addToCart = async (userId, products, token) => {
  try {
    const response = await axiosClient.post(
      `/carts/add`,
      {
        userId,
        products: Array.isArray(products) ? products : [products]
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
   
    throw error;
  }
};

const getCart = async (userId, token) => {
  try {
    const response = await axiosClient.get(
      `/carts/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data.carts[0];
  } catch (error) {
    throw error;
  }
};

const cartService = {
  addToCart,
  getCart
};

export default cartService;