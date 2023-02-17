import React, { useRef, MouseEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();

    if (usernameInputRef === null || passwordInputRef === null) {
      toast.warn(`Veuillez remplir tous les champs.`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      const data = {
        username: usernameInputRef.current?.value as string,
        password: passwordInputRef.current?.value as string,
      };

      api.user
        .login(data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("groupomania-token", res.token);
            localStorage.setItem("groupomania-id", res.data.id);
            toast.success(`Bienvenue ${usernameInputRef.current?.value}`, {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            });
            setTimeout(() => navigate("/"), 3000);
          } else if (res.status === 401 || res.status === 403) {
          }
        })
        .catch((err) => console.log({ err: err.message }));
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <ToastContainer />
      <form className="w-2/3 bg-primary-100 shadow-md h-2/3 flex flex-col justify-around p-4 rounded-lg">
        <div>
          <h1 className="text-xl text-primary-300 font-bold">Se Connecter</h1>
        </div>
        <div>
          <input
            className="input  focus:outline-none"
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            id="username"
            ref={usernameInputRef}
            required
          />
        </div>
        <div>
          <input
            className="input focus:outline-none"
            type="password"
            name="password"
            placeholder="Mot de passe"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary-200 text-primary-100 px-2 py-1 rounded-md hover:shadow-md hover:shadow-primary-100 hover:text-primary-300 "
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Login;
