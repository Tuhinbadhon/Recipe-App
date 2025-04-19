"use client";

import toast from "react-hot-toast";

const StepThree = ({ formData, handleChange, nextStep, prevStep }) => {
  const handleChangedata = (e) => {
    handleChange("instructions", e.target.value);
  };
  const handleNext = () => {
    if (
      typeof formData.instructions !== "string" ||
      !formData.instructions.trim()
    ) {
      toast.error("Please fill out the Instructions field.");
      return;
    }

    nextStep();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-5">Step 3: Instructions</h2>
      <textarea
        className="w-full p-3 border rounded"
        placeholder="Write step-by-step instructions"
        rows={6}
        value={formData.instructions}
        onChange={handleChangedata}
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-white rounded">
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

export default StepThree;
