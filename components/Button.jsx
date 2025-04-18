"use client";

const Button = ({ children }) => {
  return (
    <button className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-100 hover:bg-yellow-400 sm:w-max">
      <span className="block text-yellow-900 font-semibold text-sm">
        {children}
      </span>
    </button>
  );
};

export default Button;
