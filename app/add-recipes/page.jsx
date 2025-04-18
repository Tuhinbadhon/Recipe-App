import RecipeForm from "@/components/Form/RecipeForm";

const AddRecipes = () => {
  return (
    <div className=" mt-20 min-h-screen items-center justify-center  px-4">
      <h2 className="text-center mb-10 text-4xl text-[#713f12] mt-5 md:mt-10">
        Add Your Recipe
      </h2>
      <RecipeForm />
    </div>
  );
};

export default AddRecipes;
