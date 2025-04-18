import toast from "react-hot-toast";

const StepOne = ({ formData, handleChange, nextStep }) => {
  const handleNext = () => {
    if (!formData.name.trim() || !formData.category.trim()) {
      toast.error("Please fill out both the Recipe Name and Category fields.");
      return;
    }

    nextStep(); 
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">
        Step 1: Recipe Name and Category
      </h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => handleChange("category", e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleNext}
        className="bg-yellow-400 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
