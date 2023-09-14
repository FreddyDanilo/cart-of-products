import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductCart } from "../../types/Product";

type ProductsState = {
  products: ProductCart[];
};

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    descreaseProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    },

    increaseProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
  },
});

export const { addProduct, increaseProduct, descreaseProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
