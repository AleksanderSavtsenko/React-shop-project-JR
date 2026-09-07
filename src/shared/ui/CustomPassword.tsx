import { Form, type FormControlProps } from "react-bootstrap";


import classes from "../SharedUI.module.css";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

function CustomPassword(props: FormControlProps) {

 const [isVisible, setIsVisible] = useState<boolean>(false)

function showPassword() {
  setIsVisible(true)
}

function hidePassword() {
  setIsVisible(false)
}


  return (
    <div className = {classes.passwordContainer}>
    <Form.Control className = {classes.passwordInput} {...props} children = {null} type = {isVisible ? 'text': 'password'} />
    {!props.isInvalid && !isVisible && <GoEyeClosed className = {classes.passwordIcon} onClick = {showPassword}/>}
     {!props.isInvalid && isVisible && <GoEye className = {classes.passwordIcon} onClick ={hidePassword}/>}
     {props.children}
    </div>
  );
}
export default CustomPassword