import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import { NavbarComponent } from "./components/Navbar";
import AuthPage from "./components/auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="w-full h-full">
          <NavbarComponent />
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
