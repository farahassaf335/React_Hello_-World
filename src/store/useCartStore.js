import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = (userName) =>
  create(
    persist(
      (set, get) => ({
        cart: [],
        addItem: (item) =>
          set((state) => ({ cart: [...state.cart, item] })),
        removeItem: (id) =>
          set((state) => ({ cart: state.cart.filter(i => i.id !== id) })),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: `cart_user_${userName}`, 
      }
    )
  );

export default useCartStore;
