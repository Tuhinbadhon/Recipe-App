"use client";

import Image from "next/image";
import toast from "react-hot-toast"; // ✅ Make sure toast is imported

const StepFour = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (!formData.image) {
      toast.error("Please upload an image before continuing.");
      return;
    }
    nextStep(); // go to StepFive
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-5">Step 4: Upload Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block"
      />

      {/* Preview uploaded image */}
      {formData.image && (
        <Image
          src={formData.image}
          alt="Preview"
          width={160}
          height={160}
          className="object-cover rounded mt-4 mx-auto"
        />
      )}

      <div className="flex justify-between mt-6">
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

export default StepFour;
