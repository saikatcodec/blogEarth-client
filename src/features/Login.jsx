import { useState } from "react";
import { Envelope, Password } from "phosphor-react";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import TextInput from "../components/auth/TextInput";
import PasswordInput from "../components/auth/PasswordInput";
import { InputIconTag } from "../../utils/InputIconTag";
import { loginApi } from "./loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginApi(formData));
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className=" space-y-3 mt-10" onSubmit={onSubmitHandler}>
      {/* User Email */}
      <TextInput
        name="email"
        placeholder="Enter Email"
        text="Email*"
        value={formData.email}
        onChange={onChangeHandler}
      >
        <Envelope size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* User Password */}
      <PasswordInput
        name="password"
        placeholder="Enter Password"
        text="Password*"
        value={formData.password}
        onChange={onChangeHandler}
      >
        <Password size={InputIconTag.size} color={InputIconTag.color} />
      </PasswordInput>

      <Button
        className="mx-auto w-full"
        size="sm"
        color="secondary"
        type="submit"
      >
        Sign In
      </Button>
      <Link
        className="text-sm text-center text-blue-600 hover:text-blue-800 block"
        to={"/register"}
      >
        New to BlogEarth?
      </Link>
    </form>
  );
};

export default Login;
