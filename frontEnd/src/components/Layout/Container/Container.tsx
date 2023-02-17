import React from "react";
import Header from "../Header/Header";

interface ContainerProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | React.ReactElement
    | React.ReactElement[]
    | string;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Container;
