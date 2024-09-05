import { Envelope, Password } from "phosphor-react";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { InputIconTag } from "../../../utils/InputIconTag";

const Login = () => {
  return (
    <form className=" space-y-3 mt-10">
      {/* User Email */}
      <TextInput name="email" placeholder="Enter Email" text="Email*">
        <Envelope size={InputIconTag.size} color={InputIconTag.color} />
      </TextInput>

      {/* User Password */}
      <PasswordInput
        name="password"
        placeholder="Enter Password"
        text="Password*"
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
