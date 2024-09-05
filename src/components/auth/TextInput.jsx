import { InputIcon, Input, Label } from "keep-react";

const TextInput = (props) => {
  return (
    <fieldset className="space-y-1">
      <Label htmlFor={props.name}>{props.text}</Label>
      <div className="relative">
        <Input
          id={props.name}
          placeholder={props.placeholder}
          className="ps-11"
        />
        <InputIcon>{props.children}</InputIcon>
      </div>
    </fieldset>
  );
};

export default TextInput;
