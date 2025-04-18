"use client";
import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Modal from "../Modal";
import RecipeCard from "./RecipeCard";
import SingleRecipe from "./SingleRecipe";

const RecipesList = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

// console.log("recipeId", recipeId);
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: HttpKit.getTopRecipes,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (data) {
      setRecipes(data);
      setCurrentPage(1); 
    }
  }, [data]);

  const handleSearch = async () => {
    const query = searchInput.trim();

    if (!query) {
      const top = await HttpKit.getTopRecipes();
      setRecipes(top);
      setCurrentPage(1);
      return;
    }

    try {
      let result = await HttpKit.searchRecipesByName(query);
      if (result.length) {
        setRecipes(result);
        setCurrentPage(1);
        return;
      }

      result = await HttpKit.searchRecipesByIngredient(query);
      if (result.length) {
        setRecipes(result);
        setCurrentPage(1);
        return;
      }

      result = await HttpKit.filterByCategory(query);
      if (result.length) {
        setRecipes(result);
        setCurrentPage(1);
        return;
      }

      setRecipes([]);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const handleDetailsOpen = (id) => {
    // console.log("clicked", id);
    setRecipeId(id);
    setOpenDetails(true);
  };

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
        <h1
          data-aos="fade-up"
          className="text-2xl md:text-4xl font-bold text-center text-[#713f12]"
        >
          Top Recipes
        </h1>

        {/* Search Input */}
        <div data-aos="fade-up">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="w-full mt-12"
          >
            <div className="relative flex p-1 mx-5 lg:mx-14 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
              <input
                placeholder="Your favorite recipe..."
                className="w-full p-4 rounded-full outline-none bg-transparent"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                type="submit"
                title="Search"
                className="ml-auto py-3 px-6 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 text-yellow-900 font-semibold md:px-12"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Recipe Grid */}
        <div data-aos="fade-up" className="relative py-16">
          <div className="container m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {currentRecipes.length > 0 ? (
                currentRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe?.idMeal}
                    recipe={recipe}
                    handleDetailsOpen={handleDetailsOpen}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  No recipes found. Try another keyword.
                </p>
              )}
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

      {/* Modal */}
      <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
        <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
      </Modal>
    </div>
  );
};

export default RecipesList;
