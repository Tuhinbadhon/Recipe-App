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

  return (
    <div>
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
      <button onClick={addIngredient} className="mb-4 text-blue-500">
        + Add Ingredient
      </button>
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 border rounded">
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default StepTwo;
