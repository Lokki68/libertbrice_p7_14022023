import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./components/Layout/Container/Container";
import Home from "./pages/Home/Home";
import RequireAuth from "./utils/RequireAuth";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Annuaire from "./components/Annuaire";
import Profil from "./components/Profil";
import PostForm from "./components/Posts/PostForm";

function App() {
  return (
    <div className="h-[100vh] text-center bg-[url('assets/photo_entreprise.jpg')] bg-center bg-cover">
      <Container>
        <Routes>
          <Route
            path={"/"}
            element={
              <RequireAuth withAuth={true}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/post/newpost"
            element={
              <RequireAuth withAuth={true}>
                <PostForm />
              </RequireAuth>
            }
          />
          <Route
            path={"/annuaire"}
            element={
              <RequireAuth withAuth={true}>
                <Annuaire />
              </RequireAuth>
            }
          />
          <Route
            path="/profil"
            element={
              <RequireAuth withAuth={true}>
                <Profil />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <RequireAuth withAuth={false}>
                <Login />
              </RequireAuth>
            }
          />
          <Route
            path="/register"
            element={
              <RequireAuth withAuth={false}>
                <Register />
              </RequireAuth>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
