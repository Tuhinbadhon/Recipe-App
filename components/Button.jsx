"use client";

const Button = ({ children }) => {
  return (
    <button className="w-full md:py-3 md:px-6 py-2 px-4  text-center rounded-full transition bg-yellow-100 hover:bg-yellow-400 sm:w-max">
      <span className="block text-yellow-900 font-semibold text-sm">
        {children}
      </span>
    </button>
  );
};

export default Button;
