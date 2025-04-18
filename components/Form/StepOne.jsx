const StepOne = ({ formData, handleChange, nextStep }) => (
  <div>
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
      onClick={nextStep}
      className="bg-yellow-400 text-white px-4 py-2 rounded"
    >
      Next
    </button>
  </div>
);
export default StepOne;
