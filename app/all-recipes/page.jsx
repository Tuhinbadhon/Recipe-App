"use client";
import HttpKit from "@/common/helpers/HttpKit";
import Recipe from "@/components/Recipes/Recipe";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const AllRecipes = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const {
    data: recipes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: HttpKit.getTopRecipes,
  });

  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
    // Handle details view here if needed
  };

  // Pagination logic
  const indexOfLast = currentPage * recipesPerPage;
  const indexOfFirst = indexOfLast - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-10">
        <HashLoader color="#e6762f" size={60} />
      </div>
    );

  if (error) return <div>Error loading recipes: {error.message}</div>;

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mt-5 md:mt-10 text-[#713f12]">
          All Recipes
        </h1>

        <div data-aos="fade-up" className="relative md:py-16 py-5">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {currentRecipes.map((recipe) => (
                <Recipe
                  key={recipe?.idMeal}
                  recipe={recipe}
                  handleDetailsOpen={handleDetailsOpen}
                />
              ))}
            </div>

            {/* Pagination */}
            {recipes.length > recipesPerPage && (
              <div className="flex justify-center mt-10 gap-2 flex-wrap">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-4 py-2 rounded-md border ${
                      currentPage === i + 1
                        ? "bg-yellow-400 text-white"
                        : "bg-white text-yellow-900 border-yellow-300"
                    } hover:bg-yellow-200`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
