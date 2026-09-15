import { Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout"
import Form from 'react-bootstrap/Form';
import classes from './SignInPage.module.css'

import CustomPassword from "../../shared/ui/CustomPassword";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useEffect } from "react";


const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface FormValues {
  email: string;
  password: string;
}


function SignInPage() {
 const {values, errors, handleSubmit, handleChange, isValid, dirty,resetForm, handleBlur  } = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: (values) => {
    console.log(values)
    resetForm()
  },
    validationSchema: LoginFormSchema,
    validateOnBlur: true
})

const navigate = useNavigate()

function gotoSignUpPage() {
  navigate('/sign-up')
}



useEffect(()=> {
  import('../../pages/products/productsPage.tsx')
},[])


    return (
        <MainLayout>
            <div className = {classes.formContainer}>
           <Form onSubmit = {handleSubmit}>
            <h1>Sign in</h1>
      <Form.Group onBlur = {handleBlur} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value = {values.email} onChange = {handleChange} isInvalid = {Boolean(errors.email)} />
    <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            
      </Form.Group>

      <Form.Group onBlur = {handleBlur} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <CustomPassword placeholder="Password" value = {values.password}onChange = {handleChange} isInvalid = {Boolean(errors.password)}>

         <Form.Control.Feedback type="invalid">
      {errors.password}
    </Form.Control.Feedback>
  </CustomPassword>
</Form.Group>
      <Button disabled = {!isValid || !dirty} variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick ={gotoSignUpPage} variant = 'link'>Don't have an account?</Button>
    </Form>
    </div>
        </MainLayout>
        
    )

}

export default SignInPage