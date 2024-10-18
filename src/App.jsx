import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import { NavbarComponent } from "./components/Navbar";
import AuthPage from "./components/auth";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="w-full h-full">
          <NavbarComponent />
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route
              element={<PrivateRoutes />}
              loader={async () => {
                console.log("private loader");
                return fetch("https://jsonplaceholder.typicode.com/posts");
              }}
            >
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
