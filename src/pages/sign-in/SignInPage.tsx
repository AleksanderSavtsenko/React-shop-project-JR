import { Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout"
import Form from 'react-bootstrap/Form';
import classes from './SignInPage.module.css'
import {useEffect, useState, type ChangeEvent} from "react";


interface formValues {
    email: string;
    password: string;
}

interface formErrors {
  email: string;
  password: string;
}


function SignInPage() {
    const [formValues, setFormValues] = useState<formValues>({email: '', password: ''})
    const [formErrors, setFormErrors] = useState<formErrors>({email: '', password: ''})
    const [isStartTyping, setIsStartTyping] = useState<boolean>(false)

    function handleSubmit(event: SubmitEvent) {
      event.preventDefault()
    }

    function changeEmailValue(event: ChangeEvent<HTMLInputElement>) {
      setIsStartTyping(true)
      setFormValues({...formValues, email: event.target.value})
    }


    function changePasswordValue(event: ChangeEvent<HTMLInputElement>) {
      setIsStartTyping(true)
      setFormValues({...formValues, password: event.target.value})
    }


    useEffect(() => {
  if (!formValues.email && isStartTyping) {
    setFormErrors(prev => ({
      ...prev,
      email: 'Email is required'
    }))
  } else {
    setFormErrors(prev => ({...prev, email: ''
    }))
  }
}, [formValues.email, isStartTyping])


useEffect(() => {
  if (!formValues.password && isStartTyping) {
    setFormErrors(prev => ({
      ...prev,
      password: 'Password is required'
    }))
  } else {
    setFormErrors(prev => ({...prev, password: ''
    }))
  }
}, [formValues.password, isStartTyping])



    return (
        <MainLayout>
            <div className = {classes.formContainer}>
              {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/*@ts-expect-error */}
           <Form onSubmit = {handleSubmit}>
            <h1>Sign in</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value = {formValues.email} onChange = {changeEmailValue} isInvalid = {Boolean(formErrors.email)} />
    <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
            
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value = {formValues.password}onChange = {changePasswordValue} isInvalid = {Boolean(formErrors.password)} />
      <Form.Control.Feedback type="invalid">
              {formErrors.password}
            </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </MainLayout>
        
    )

}

export default SignInPage