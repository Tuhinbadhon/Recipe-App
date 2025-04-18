"use client";

import Modal from "@/components/Modal";
import RecipeCard from "@/components/Recipes/RecipeCard";
import SingleRecipe from "@/components/Recipes/SingleRecipe";
import { useEffect, useState } from "react";

const Cart = () => {
  const [recipes, setRecipes] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const storageKey = user ? `cart_${user.email}` : "cart";

    const storedCart = JSON.parse(localStorage.getItem(storageKey)) || [];

    setRecipes(storedCart);
  }, []);

  const handleDetailsOpen = (id) => {
    // console.log("clicked", id);
    setRecipeId(id);
    setOpenDetails(true);
  };
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mt-5 md:mt-10 text-[#713f12]">
          Your Cart
        </h1>

        <div data-aos="fade-up" className="relative md:py-16 py-5">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            {recipes.length > 0 ? (
              <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                {recipes.map((recipe) => (
                  <RecipeCard
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
      {/* Modal */}
      <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
        <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
      </Modal>
    </div>
  );
};

export default Cart;
