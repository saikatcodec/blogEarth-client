import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./../../features/Login";

const Index = () => {
  const location = useLocation();
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (location.pathname === "/login") {
      setLogin(true);
    } else if (location.pathname === "/register") {
      setLogin(false);
    }
  }, [location]);

  return (
    <div className="w-10/12 sm:w-96 rounded-lg p-8 border shadow-md mx-auto my-10">
      <div className="space-y-2">
        <h2 className="text-4xl text-center text-gray-500 font-bold">
          BlogEarth
        </h2>
        <p className="text-sm text-center text-gray-400">
          Login to create, read and update the blogs
        </p>
      </div>

      {login ? <Login /> : <Register />}
    </div>
  );
};

export default Index;
