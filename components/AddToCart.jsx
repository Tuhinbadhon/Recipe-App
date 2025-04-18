"use client";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-hot-toast";
import Button from "./Button";

const AddToCart = ({ recipe }) => {
  const addToCart = (e) => {
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("user"));
    const storageKey = user ? `cart_${user.email}` : "cart";

    const existingCart = JSON.parse(localStorage.getItem(storageKey)) || [];

    const isAlreadyInCart = existingCart.some(
      (item) => item.idMeal === recipe.idMeal
    );

    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, recipe];
      localStorage.setItem(storageKey, JSON.stringify(updatedCart));
      toast.success(`${recipe.strMeal} added to cart!`);
    } else {
      toast.error(`${recipe.strMeal} is already in the cart.`);
    }
  };
  return (
    <div onClick={addToCart}>
      <Button>
        <span className="flex items-center gap-2">
          <ShoppingCart size={18} />
          Add to cart
        </span>
      </Button>
    </div>
  );
};

export default AddToCart;
