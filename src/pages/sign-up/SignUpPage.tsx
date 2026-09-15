import { Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout"
import Form from 'react-bootstrap/Form';
import classes from './SignUpPage.module.css'

import CustomPassword from "../../shared/ui/CustomPassword";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";


const LoginFormSchema = Yup.object().shape({
  name: Yup.string().max(100, 'Name must be at most 100 characters').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, "Must Contain 8 Characters").required('Password is required') .matches(
      /^(?=.*[a-z])/,
      " Must Contain One Lowercase Character"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "  Must Contain One Uppercase Character"
    )
    .matches(
      /^(?=.*[0-9])/,
      "  Must Contain One Number Character"
    )
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
    confirmPassword: Yup.string() .oneOf([Yup.ref("password")], "Passwords must match")
});

interface FormValues {
    name: string;
  email: string;
  password: string;
  confirmPassword: string;
}



function SignUpPage() {
 const {values, errors, handleSubmit, handleChange, isValid, dirty,resetForm, handleBlur  } = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },

    onSubmit: (values) => {
    console.log(values)
    resetForm()
  },
    validationSchema: LoginFormSchema,
    validateOnBlur: true
})

const navigate = useNavigate()
function goToSignInPage() {
  navigate('/sign-in')
}


    return (
        


        <MainLayout>
            <div className = {classes.formContainer}>
           <Form onSubmit = {handleSubmit}>
            <h1>Sign Up</h1>



            <Form.Group onBlur = {handleBlur} className="mb-3" controlId="name">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value = {values.name} onChange = {handleChange} isInvalid = {Boolean(errors.name)} />
    <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
            
      </Form.Group>

      



      <Form.Group onBlur = {handleBlur} className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value = {values.email} onChange = {handleChange} isInvalid = {Boolean(errors.email)} />
    <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            
      </Form.Group>

      <Form.Group onBlur = {handleBlur} className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <CustomPassword  placeholder="Password" value = {values.password}onChange = {handleChange} isInvalid = {Boolean(errors.password)}>

         <Form.Control.Feedback type="invalid">
      {errors.password}
    </Form.Control.Feedback>
  </CustomPassword>
</Form.Group>

         <Form.Group onBlur = {handleBlur} className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <CustomPassword placeholder="Confirm Password" value = {values.confirmPassword}onChange = {handleChange} isInvalid = {Boolean(errors.confirmPassword)}>

         <Form.Control.Feedback type="invalid">
      {errors.confirmPassword}
    </Form.Control.Feedback>
  </CustomPassword>
</Form.Group>



      <Button disabled = {!isValid || !dirty} variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick ={goToSignInPage} variant = 'link'>Already have an account?</Button>
    </Form>
    </div>
        </MainLayout>
        
    )

}

export default SignUpPage