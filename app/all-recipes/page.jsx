"use client";
import HttpKit from "@/common/helpers/HttpKit";
import Recipe from "@/components/Recipes/Recipe";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HashLoader } from "react-spinners";

const AllRecipes = () => {
  const [openDetails, setOpenDetails] = useState(false);

  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: HttpKit.getTopRecipes,
  });
  // console.log("data", data);
  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
    setRecipeId(id);
  };
  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-10 ">
        <HashLoader color="#e6762f" size={60} />
      </div>
    );
  if (error) return <div>Error loading recipes: {error.message}</div>;
  return (
    <div className="r">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mt-5 md:mt-10">
          All Recipes 
        </h1>
        
        <div data-aos="fade-up" className="relative md:py-16 py-5">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {recipes?.map((recipe) => (
                <Recipe
                  key={recipe?.id}
                  recipe={recipe}
                  handleDetailsOpen={handleDetailsOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
