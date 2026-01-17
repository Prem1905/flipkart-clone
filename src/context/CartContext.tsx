"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";

/* =======================
   Types
======================= */

export type Product = {
  id: number;
  title: string;
  price: number;
  stock: number;
};

export type CartItem = Product & {
  quantity: number;
};

type State = {
  items: CartItem[];
};

type Action =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: number }
  | { type: "INCREMENT"; id: number }
  | { type: "DECREMENT"; id: number }
  | { type: "SET_CART"; items: CartItem[] }
  | { type: "CLEAR" };

type CartContextValue = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

/* =======================
   Context
======================= */

const CartContext = createContext<CartContextValue | null>(null);

/* =======================
   Reducer
======================= */

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CART":
      return { items: action.items };

    case "ADD": {
      const existing = state.items.find(
        (i) => i.id === action.product.id
      );

      if (existing) {
        if (existing.quantity >= existing.stock) {
          return state;
        }

        return {
          items: state.items.map((i) =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    }

    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.id === action.id && i.quantity < i.stock
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };

    case "DECREMENT":
      return {
        items: state.items
          .map((i) =>
            i.id === action.id
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter((i) => i.quantity > 0),
      };

    case "REMOVE":
      return {
        items: state.items.filter((i) => i.id !== action.id),
      };

    case "CLEAR":
      return { items: [] };

    default:
      return state;
  }
}


/* =======================
   Provider
======================= */

const STORAGE_KEY = "flipkart-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  /* ✅ Load cart from localStorage (once) */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const items = JSON.parse(stored) as CartItem[];
        dispatch({ type: "SET_CART", items });
      } catch {
        console.warn("Failed to parse cart from localStorage");
      }
    }
  }, []);

  /* ✅ Save cart on every change */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

/* =======================
   Hook
======================= */

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
