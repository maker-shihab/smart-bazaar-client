import { createContext } from "react";
import { CartContextType } from "../types/cartType";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
