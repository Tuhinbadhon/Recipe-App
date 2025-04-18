"use client";

import Image from "next/image";

const StepFive = ({ formData, prevStep, handleSubmit }) => {
  const handleSubmitForm = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("userRecipes")) || [];
      localStorage.setItem(
        "userRecipes",
        JSON.stringify([...stored, formData])
      );
      handleSubmit();
    } catch (error) {
      console.error("Error submitting recipe:", error);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-5">Step 5: Preview & Submit</h2>

      <div className="border p-4 rounded space-y-2">
        <h3 className="text-lg font-bold">{formData.name}</h3>
        <p>
          <strong>Category:</strong> {formData.category}
        </p>
        <p>
          <strong>Instructions:</strong> {formData.instructions}
        </p>
        <Image
          src={formData.image}
          alt="Recipe"
          width={192}
          height={192}
          className="object-cover rounded"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-white rounded">
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-yellow-200 hover:bg-yellow-400 text-yellow-900 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFive;
