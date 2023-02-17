import React from "react";

interface HeaderButtonProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | React.ReactElement
    | React.ReactElement[]
    | string;
  onClick: () => void;
}

const HeaderButton = ({ children, onClick }: HeaderButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-200 text-primary-100 px-2 py-1 rounded-md hover:shadow-md hover:shadow-primary-100 hover:text-primary-300 "
    >
      {children}
    </button>
  );
};

export default HeaderButton;
