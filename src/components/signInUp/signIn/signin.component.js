import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Button, Row, Label } from 'reactstrap';
import SocialButtons from '../socialBtns/socialBtns.component';
import './signin.style.scss';

function SignInForm({ errors, touched, isSubmitting }) {
  return (
    <div className=''>
      <h2 className='text-center'>Welcome Back</h2>
      {/* <h6 className='text-center'></h6> */}
      <SocialButtons action='Sign in' />
      <Form className='form'>
        <Row className='form-group'>
          <Label htmlFor='email'>Username/Email</Label>
          <Field type='text' className='form-control' name='email' id='email' />
          {touched.email && errors.email && (
            <p className='warning-text'>{errors.email}</p>
          )}
        </Row>
        <Row className='form-group'>
          <Label htmlFor='password'>Password</Label>
          <Field
            type='password'
            className='form-control'
            name='password'
            id='password'
          />
          {touched.password && errors.password && (
            <p className='warning-text'>{errors.password}</p>
          )}
        </Row>
        <Row>
          <Button
            type='submit'
            disabled={isSubmitting}
            className='form-control bg-dark'
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}

const SignIn = withFormik({
  mapPropsToValues() {
    return { email: '', password: '' };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email or Username is required'),
    password: Yup.string()
      .min(8)
      .required(),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(SignInForm);

export default SignIn;
