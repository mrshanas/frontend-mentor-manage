import React from "react";

interface Props {
  buttonWidth: string;
}

const Button: React.FC<Props> = ({ buttonWidth }) => {
  return (
    <button
      type="button"
      className={`bg-red w-${buttonWidth} h-full text-white text-xl p-2 rounded-3xl hover:text-paleblue`}
    >
      Get Started
    </button>
  );
};

export default Button;
