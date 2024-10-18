import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../features/auth/authSlice";

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
