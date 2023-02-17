import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderButton from "../../../UiComponents/HeaderButton";

const ConnectionNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-around mt-auto mb-4 md:hidden">
      <HeaderButton onClick={() => navigate("/login")}>Connexion</HeaderButton>
      <HeaderButton onClick={() => navigate("/register")}>
        Inscription
      </HeaderButton>
    </nav>
  );
};

export default ConnectionNav;
