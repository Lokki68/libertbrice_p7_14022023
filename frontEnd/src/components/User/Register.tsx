import React, { useRef, MouseEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    if (
      usernameInputRef === null ||
      emailInputRef === null ||
      passwordInputRef === null
    ) {
      toast.warn("Veuillez remplir tous les champs !", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      const data = {
        username: usernameInputRef.current?.value as string,
        email: emailInputRef.current?.value as string,
        password: passwordInputRef.current?.value as string,
      };

      api.user
        .save(data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Enregistrement réussi !", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            });
            setTimeout(() => navigate("/login"), 3000);
          } else if (res.status === 400 || res.status === 403) {
            toast.error(`${res?.error}`, {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            });
          }
        })
        .catch((err) => console.log({ err: err.message }));
    }
  };
  return (
    <div className="h-[100vh]  flex justify-center items-center">
      <ToastContainer />
      <form className="w-2/3 bg-primary-100 shadow-md h-2/3 flex flex-col justify-around p-4 rounded-lg">
        <div>
          <h1 className="text-xl text-primary-300 font-bold">S'enregistrer</h1>
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
            className="input  focus:outline-none"
            type="email"
            name="email"
            placeholder="Adresse Email"
            id="email"
            ref={emailInputRef}
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

export default Register;
