import { InputIcon, Input, Label } from "keep-react";

const PasswordInput = (props) => {
  return (
    <fieldset className="space-y-1">
      <Label htmlFor={props.name}>{props.text}</Label>
      <div className="relative">
        <Input
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          className="ps-11"
          type="password"
          value={props.value}
          required={props.required}
          onChange={props.onChange}
        />
        <InputIcon>{props.children}</InputIcon>
      </div>
    </fieldset>
  );
};

export default PasswordInput;
