import React from "react";
import TextInput from "./TextInput";
import {
  Buildings,
  Envelope,
  FlagBanner,
  Password,
  UserCircle,
} from "phosphor-react";
import { InputIconTag } from "../../../utils/InputIconTag.js";
import PasswordInput from "./PasswordInput";
import TextArea from "../TextArea.jsx";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <form className="mt-10 space-y-3">
      {/* User Email */}
      <TextInput name="email" placeholder="Enter Email" text="Email*">
        <Envelope size={19} color="#AFBACA" />
      </TextInput>

      {/* User Full Name */}
      <TextInput name="name" placeholder="Enter Full Name" text="Name*">
        <UserCircle size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* User Password */}
      <PasswordInput
        name="password"
        placeholder="Enter Password"
        text="Password*"
      >
        <Password size={InputIconTag.size} color={InputIconTag.color} />
      </PasswordInput>

      {/* User Re-type Password */}
      <PasswordInput
        name="confirm_password"
        placeholder="Re-type Password"
        text="Confirm Password*"
      >
        <Password size={InputIconTag.size} color={InputIconTag.color} />
      </PasswordInput>

      {/* Work */}
      <TextInput name="work" placeholder="Work" text="Work">
        <Buildings size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* Work */}
      <TextInput name="work_at" placeholder="Work at" text="Work At">
        <Buildings size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* Country */}
      <TextInput name="country" placeholder="Country" text="Country">
        <FlagBanner size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* About */}
      <TextArea name="about" placeholder="About Yourself" text="About" />

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
