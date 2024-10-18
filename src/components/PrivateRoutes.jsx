import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { verifyToken } from "../features/auth/authSlice";

function PrivateRoutes() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const auth = useSelector((state) => state.auth);
  const data = useLoaderData();

  useEffect(() => {
    dispatch(verifyToken(token));
    console.log(data);
  }, []);

  return (
    <>
      {auth.loading ? (
        "Loading......."
      ) : auth.valid ? (
        <Outlet />
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}

export default PrivateRoutes;
