import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import { removeLocalStorage } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { loginUserReducer } from "../redux/userReducer";
import { RootState } from "./types";

interface RequireAuthProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | React.ReactElement
    | React.ReactElement[]
    | string;
  withAuth: boolean;
}

const RequireAuth = ({ children, withAuth }: RequireAuthProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user.isLogged && withAuth) {
      const token = localStorage.getItem("groupomania-token");
      if (token === null) {
        return navigate("/login");
      } else {
        const id = Number(localStorage.getItem("groupomania-id"));
        const data = { token, id };

        api.user
          .checkToken(data)
          .then((res) => {
            if (res.status === 200) {
              dispatch(loginUserReducer(res.data));
            } else {
              removeLocalStorage();
              navigate("/login");
            }
          })
          .catch((_) => {
            removeLocalStorage();
            navigate("/login");
          });
      }
    }
  });

  return <>{children}</>;
};

export default RequireAuth;
