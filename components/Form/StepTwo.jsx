import toast from "react-hot-toast";

const StepTwo = ({ formData, handleChange, nextStep, prevStep }) => {
  const updateIngredient = (idx, value) => {
    const updated = [...formData.ingredients];
    updated[idx] = value;
    handleChange("ingredients", updated);
  };

  const addIngredient = () =>
    handleChange("ingredients", [...formData.ingredients, ""]);
  const removeIngredient = (idx) => {
    const updated = formData.ingredients.filter((_, i) => i !== idx);
    handleChange("ingredients", updated);
  };
const handleNext = () => {
  const hasEmpty = formData.ingredients.some((item) => !item.trim());

  if (hasEmpty) {
    toast.error("Please fill out all ingredient fields.");
    return;
  }
  nextStep(); 
};
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">
        Step 2: Ingredient
      </h2>

      {formData.ingredients.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={item}
            onChange={(e) => updateIngredient(i, e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button onClick={() => removeIngredient(i)} className="text-red-500">
            X
          </button>
        </div>
      ))}
      <button onClick={addIngredient} className="mb-4 text-blue-500 ">
        + Add Ingredient
      </button>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-white border rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-yellow-400 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default StepTwo;
