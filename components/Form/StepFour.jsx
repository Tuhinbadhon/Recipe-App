"use client";

import Image from "next/image";

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

  console.log(formData.image); // Debugging line to check the image data

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 4: Upload Image</h2>

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
          onClick={nextStep}
          className="px-4 py-2 bg-yellow-400 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepFour;
