"use client";

import WishlistRecipeCard from "@/components/Recipes/WishlistRecipeCard";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Get user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const storageKey = user ? `wishlist_${user.email}` : "wishlist";

    // Get cart items
    const storedCart = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Update state
    setRecipes(storedCart);
  }, []);

  const handleDetailsOpen = (idMeal) => {
    console.log("Open details for:", idMeal);
    // Add your modal or navigation logic here
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mt-5 md:mt-10">Your Wishlist</h1>

        <div data-aos="fade-up" className="relative md:py-16 py-5">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            {recipes.length > 0 ? (
              <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                {recipes.map((recipe) => (
                  <WishlistRecipeCard
                    key={recipe?.idMeal}
                    recipe={recipe}
                    handleDetailsOpen={handleDetailsOpen}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-10">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
