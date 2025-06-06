"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import Swal from "sweetalert2";

const RecipeForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    ingredients: [""],
    instructions: [""],
    image: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const existing = JSON.parse(localStorage.getItem("submittedRecipes")) || [];
    localStorage.setItem(
      "submittedRecipes",
      JSON.stringify([...existing, formData])
    );

    Swal.fire({
      icon: "success",
      title: "Recipe submitted!",
      text: "Your recipe has been added successfully.",
      confirmButtonColor: "#facc15", 
    }).then(() => {
      
      setFormData({
        name: "",
        category: "",
        ingredients: [""],
        instructions: [""],
        image: null,
      });
      setStep(1);
      router.push("/");
    });
  };
  const steps = {
    1: (
      <StepOne
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
      />
    ),
    2: (
      <StepTwo
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    3: (
      <StepThree
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    4: (
      <StepFour
        formData={formData}
        setFormData={setFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    5: (
      <StepFive
        formData={formData}
        handleSubmit={handleSubmit}
        prevStep={prevStep}
      />
    ),
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 shadow rounded">
      {steps[step]}
    </div>
  );
};

export default RecipeForm;
