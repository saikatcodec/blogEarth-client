import { Textarea, Label } from "keep-react";

const TextArea = (props) => {
  return (
    <fieldset className="space-y-1">
      <Label htmlFor={props.name}>{props.text}</Label>
      <Textarea id={props.name} placeholder={props.placeholder} rows={3} />
    </fieldset>
  );
};

export default TextArea;
