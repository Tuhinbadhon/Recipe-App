"use client";

import { Heart } from "lucide-react";
import { toast } from "react-hot-toast";
import Button from "./Button";

const AddToWishlist = ({ recipe }) => {
  const addToWishlist = (e) => {
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("user"));
    const wishlistKey = user ? `wishlist_${user.email}` : "wishlist";

    const existingWishlist =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];

    const isAlreadyInWishlist = existingWishlist.some(
      (item) => item.idMeal === recipe.idMeal
    );

    if (!isAlreadyInWishlist) {
      const updatedWishlist = [...existingWishlist, recipe];
      localStorage.setItem(wishlistKey, JSON.stringify(updatedWishlist));
      toast.success(`${recipe.strMeal} added to wishlist!`);
    } else {
      toast.error(`${recipe.strMeal} is already in the wishlist.`);
    }
  };
  return (
    <div onClick={addToWishlist}>
      <Button>
        <span className="flex items-center gap-1 md:gap-2">
          <Heart size={18} />
          Add to wishlist
        </span>
      </Button>
    </div>
  );
};

export default AddToWishlist;
