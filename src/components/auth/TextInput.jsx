import { InputIcon, Input, Label } from "keep-react";

const TextInput = (props) => {
  return (
    <fieldset className="space-y-1">
      <Label htmlFor={props.name}>{props.text}</Label>
      <div className="relative">
        <Input
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          className="ps-11"
          value={props.value}
          onChange={props.onChange}
          required={props.required || false}
        />
        <InputIcon>{props.children}</InputIcon>
      </div>
    </fieldset>
  );
};

export default TextInput;
