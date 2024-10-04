import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
} from "keep-react";

const AlertComponent = (props) => {
  return (
    <Alert
      withBg={true}
      color={props.type}
      dismiss={props.show}
      className="mt-2"
    >
      <AlertContainer>
        <AlertIcon />
        <AlertDescription>{props.description}</AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertDismiss onClick={props.doDismiss} />
      </AlertContainer>
    </Alert>
  );
};

export default AlertComponent;
