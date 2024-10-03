import React, { useState } from "react";
import {
  Buildings,
  Envelope,
  FlagBanner,
  Password,
  UserCircle,
} from "phosphor-react";
import { InputIconTag } from "../../../utils/InputIconTag.js";
import PasswordInput from "../../components/auth/PasswordInput.jsx";
import TextArea from "../../components/TextArea.jsx";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
import TextInput from "./../../components/auth/TextInput";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    work: "",
    workAt: "",
    country: "",
    about: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="mt-10 space-y-3" onSubmit={onSubmitHandler}>
      {/* User Email */}
      <TextInput
        name="email"
        placeholder="Enter Email"
        text="Email*"
        onChange={onChangeHandler}
        required={true}
      >
        <Envelope size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* User Full Name */}
      <TextInput
        name="name"
        placeholder="Enter Full Name"
        text="Name*"
        onChange={onChangeHandler}
        required={true}
      >
        <UserCircle size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* User Password */}
      <PasswordInput
        name="password"
        placeholder="Enter Password"
        text="Password*"
        onChange={onChangeHandler}
        required={true}
      >
        <Password size={InputIconTag.size} color={InputIconTag.color} />
      </PasswordInput>

      {/* User Re-type Password */}
      <PasswordInput
        name="confirmPassword"
        placeholder="Re-type Password"
        text="Confirm Password*"
        onChange={onChangeHandler}
        required={true}
      >
        <Password size={InputIconTag.size} color={InputIconTag.color} />
      </PasswordInput>

      {/* Work */}
      <TextInput
        name="work"
        placeholder="Work"
        text="Work"
        onChange={onChangeHandler}
      >
        <Buildings size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* Work */}
      <TextInput
        name="workAt"
        placeholder="Work at"
        text="Work At"
        onChange={onChangeHandler}
      >
        <Buildings size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* Country */}
      <TextInput
        name="country"
        placeholder="Country"
        text="Country"
        onChange={onChangeHandler}
      >
        <FlagBanner size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* About */}
      <TextArea
        name="about"
        placeholder="About Yourself"
        text="About"
        onChange={onChangeHandler}
      />

      {/* Sign Up Button */}
      <Button
        className="mx-auto w-full"
        size="sm"
        color="secondary"
        type="submit"
      >
        Sign Up
      </Button>

      <Link
        className="text-sm text-center text-blue-600 hover:text-blue-800 block"
        to={"/login"}
      >
        Have an account?
      </Link>
    </form>
  );
}

export default Register;
