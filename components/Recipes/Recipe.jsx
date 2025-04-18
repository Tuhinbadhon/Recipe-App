"use client";

import Image from "next/image";
import AddToCart from "../AddToCart";
import AddToWishlist from "../AddToWishlist";

const Recipe = ({ recipe, handleDetailsOpen }) => {
  return (
    <div
      onClick={() => handleDetailsOpen(recipe?.idMeal)}
      className="group space-y-6 border border-gray-100 rounded-3xl bg-white px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10"
    >
      <Image
        className="mx-auto rounded-2xl"
        src={recipe?.strMealThumb}
        alt="Recipe Thumbnail"
        loading="lazy"
        width={500}
        height={500}
      />
      <h3 className="text-2xl font-semibold text-gray-800">
        {recipe?.strMeal}
      </h3>
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>

      <div className="flex justify-between gap-2">
        <AddToWishlist recipe={recipe} />
        <AddToCart recipe={recipe} />
      </div>
    </div>
  );
};

export default Recipe;
