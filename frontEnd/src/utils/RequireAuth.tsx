import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { User } from "./types";
import api from "./api";
import { removeLocalStorage } from "./utils";

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
  const id = Number(localStorage.getItem("groupomania-id"));

  const { data: user } = useQuery<User>({
    queryKey: ["app", "user"],
    queryFn: () => api.user.info(id as number),
    staleTime: Infinity,
    enabled: !!id,
  });

  useEffect(() => {
    if (user && !user.isLogged && withAuth) {
      const token = localStorage.getItem("groupomania-id");
      if (!token) {
        return navigate("/login");
      } else {
        const id = Number(localStorage.getItem("groupomania-id"));

        if (id) {
          const data = { token, id };
          api.user
            .checkToken(data)
            .then((res) => {
              if (res.status === 200) {
                // loginUser
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
    }
  }, []);

  return <>{children}</>;
};

export default RequireAuth;
