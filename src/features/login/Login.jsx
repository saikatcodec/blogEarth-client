import { useEffect, useState } from "react";
import { Envelope, Password } from "phosphor-react";
import { Button, Spinner } from "keep-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TextInput from "../../components/auth/TextInput";
import PasswordInput from "../../components/auth/PasswordInput";
import { InputIconTag } from "../../utils/InputIconTag";
import { loginApi } from "./loginSlice";
import AlertComponent from "../../components/AlertComponent";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.login);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [alertProps, setAlertProps] = useState({
    show: true,
    type: "",
    description: "",
  });

  useEffect(() => {
    if (loginState.error) {
      setAlertProps({
        ...alertProps,
        show: false,
        type: "error",
        description: loginState.error,
      });
    }
    if (loginState.user) {
      navigate("/");
    }
  }, [loginState]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginApi(formData));
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const doDismiss = () => {
    setAlertProps({ ...alertProps, show: !alertProps.show });
  };

  return (
    <>
      <AlertComponent
        type={alertProps.type}
        show={alertProps.show}
        description={alertProps.description}
        doDismiss={doDismiss}
      />
      <form className=" space-y-3 mt-10" onSubmit={onSubmitHandler}>
        {/* User Email */}
        <TextInput
          name="email"
          placeholder="Enter Email"
          text="Email*"
          value={formData.email}
          onChange={onChangeHandler}
          required={true}
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
          required={true}
        >
          <Password size={InputIconTag.size} color={InputIconTag.color} />
        </PasswordInput>

        <Button
          className="mx-auto w-full"
          size="sm"
          color="secondary"
          type="submit"
        >
          {loginState.loading ? (
            <span className="pr-2">
              <Spinner color="gray" size="md" />
            </span>
          ) : (
            ""
          )}
          Sign In
        </Button>
        <Link
          className="text-sm text-center text-blue-600 hover:text-blue-800 block"
          to={"/register"}
        >
          New to BlogEarth?
        </Link>
      </form>
    </>
  );
};

export default Login;
