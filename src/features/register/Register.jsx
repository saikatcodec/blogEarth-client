import React, { useEffect, useState } from "react";
import {
  Buildings,
  Envelope,
  FlagBanner,
  Password,
  UserCircle,
} from "phosphor-react";
import { Button, Spinner } from "keep-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { InputIconTag } from "../../utils/InputIconTag.js";
import PasswordInput from "../../components/auth/PasswordInput.jsx";
import TextArea from "../../components/TextArea.jsx";
import TextInput from "./../../components/auth/TextInput";
import AlertComponent from "../../components/AlertComponent.jsx";
import { postUserData } from "./registerSlice.js";

const initState = {
  email: "",
  fullname: "",
  password: "",
  confirmPassword: "",
  work: "",
  workPlace: "",
  country: "",
  about: "",
};

function Register() {
  const dispacth = useDispatch(); // To dispatch the action
  const data = useSelector((state) => state.register); // Retrieve register state from the store
  const [formData, setFormData] = useState(initState); // State for
  const [alertProps, setAlertProps] = useState({
    show: true,
    type: "",
    description: "",
  });

  useEffect(() => {
    if (data.success) {
      setAlertProps({
        ...alertProps,
        type: "success",
        description: data.success,
        show: false,
      });
    } else if (data.error) {
      setAlertProps({
        ...alertProps,
        type: "error",
        description: data.error,
        show: false,
      });
    }
  }, [data]);

  const doDismiss = () => {
    setAlertProps({ ...alertProps, show: !alertProps.show });
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispacth(postUserData(formData));
    setFormData(initState);
  };

  return (
    <>
      <AlertComponent
        type={alertProps.type}
        show={alertProps.show}
        description={alertProps.description}
        doDismiss={doDismiss}
      />
      <form className="mt-10 space-y-3" onSubmit={onSubmitHandler}>
        {/* User Email */}
        <TextInput
          name="email"
          placeholder="Enter Email"
          text="Email*"
          onChange={onChangeHandler}
          value={formData.email}
          required={true}
        >
          <Envelope size={InputIconTag.size} color={InputIconTag.color} />
        </TextInput>

        {/* User Full Name */}
        <TextInput
          name="fullname"
          placeholder="Enter Full Name"
          text="Name*"
          onChange={onChangeHandler}
          value={formData.fullname}
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
          value={formData.password}
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
          value={formData.confirmPassword}
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
          value={formData.work}
        >
          <Buildings size={InputIconTag.size} color={InputIconTag.color} />
        </TextInput>

        {/* Work */}
        <TextInput
          name="workPlace"
          placeholder="Work at"
          text="Work At"
          onChange={onChangeHandler}
          value={formData.workPlace}
        >
          <Buildings size={InputIconTag.size} color={InputIconTag.color} />
        </TextInput>

        {/* Country */}
        <TextInput
          name="country"
          placeholder="Country"
          text="Country"
          onChange={onChangeHandler}
          value={formData.country}
        >
          <FlagBanner size={InputIconTag.size} color={InputIconTag.color} />
        </TextInput>

        {/* About */}
        <TextArea
          name="about"
          placeholder="About Yourself"
          text="About"
          onChange={onChangeHandler}
          value={formData.about}
        />

        {/* Sign Up Button */}
        <Button
          className="mx-auto w-full"
          size="sm"
          color="secondary"
          type="submit"
        >
          {data.loading ? (
            <span className="pr-2">
              <Spinner color="gray" size="md" />
            </span>
          ) : (
            ""
          )}
          Sign Up
        </Button>

        <Link
          className="text-sm text-center text-blue-600 hover:text-blue-800 block"
          to={"/login"}
        >
          Have an account?
        </Link>
      </form>
    </>
  );
}

export default Register;
