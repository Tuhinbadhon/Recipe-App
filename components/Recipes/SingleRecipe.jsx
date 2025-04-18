"use client";
import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect } from "react";

const SingleRecipe = ({ id, setIsOpen }) => {
  useEffect(() => {
    console.log("Received ID:", id);
  }, [id]);
  console.log("id", id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe-details", id],
    queryFn: () => HttpKit.getRecipeDetails(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-10">
        <span className="text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 font-semibold">
        Error loading recipe details.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 text-sm font-semibold bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Close
        </button>
      </div>
      <div className="text-center">
        <Image
          src={data?.strMealThumb}
          width={400}
          height={400}
          alt="Recipe Image"
          className="rounded"
        />
      </div>
      <h2 className="text-2xl font-bold text-center text-[#713f12]">
        {data?.strMeal}
      </h2>
    </div>
  );
};

export default SingleRecipe;
