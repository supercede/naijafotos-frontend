import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Button, Row, Label } from 'reactstrap';
import SocialButtons from '../socialBtns/socialBtns.component';
import './signup.style.scss';

function SignUpForm({ errors, touched, isSubmitting }) {
  return (
    <div className=''>
      <h2 className='text-center'>Get a free Account</h2>
      {/* <h6 className='text-center'></h6> */}
      <SocialButtons action='Sign up' className='m-10' />
      <Form className='form'>
        <Row className='form-group'>
          <Label htmlFor='name'>Name</Label>
          <Field
            type='text'
            className='form-control'
            name='name'
            id='name'
            placeholder='John Doe'
            required
          />
          {touched.name && errors.name && (
            <p className='warning-text'>{errors.name}</p>
          )}
        </Row>
        <Row className='form-group'>
          <Label htmlFor='userName'>Username</Label>
          <Field
            type='text'
            className='form-control'
            name='userName'
            id='userName'
            placeholder='john_01'
            required
          />
          {touched.userName && errors.userName && (
            <p className='warning-text'>{errors.userName}</p>
          )}
        </Row>
        <Row className='form-group'>
          <Label htmlFor='email'>Email</Label>
          <Field
            type='email'
            className='form-control'
            name='email'
            id='email'
            placeholder='me@mail.com'
            required
          />
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
            required
          />
          {touched.password && errors.password && (
            <p className='warning-text'>{errors.password}</p>
          )}
        </Row>
        <Row className='form-group'>
          <Label htmlFor='passwordConfirm'>Confirm Password</Label>
          <Field
            type='password'
            className='form-control'
            name='passwordConfirm'
            id='passwordConfirm'
            required
          />
          {touched.passwordConfirm && errors.passwordConfirm && (
            <p className='warning-text'>{errors.passwordConfirm}</p>
          )}
        </Row>
        <Row className='form-group'>
          <Label htmlFor='portfolio'>Portfolio (Optional)</Label>
          <Field
            type='url'
            className='form-control'
            name='portfolio'
            id='portfolio'
            placeholder='https://instagram.com/johndoe1'
          />
          {touched.portfolio && errors.portfolio && (
            <p className='warning-text'>{errors.portfolio}</p>
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

const SignUp = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      userName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      portfolio: '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required()
      .min(3)
      .max(30)
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ '.-]*$/),
    userName: Yup.string()
      .required()
      .min(3)
      .max(20)
      .matches(
        /^[a-zA-Z0-9_]*$/,
        'Username can only contain numbers, letters and underscores'
      ),
    email: Yup.string().required('Email or Username is required'),
    password: Yup.string()
      .min(8)
      .max(18, 'Password cannot be more than 18 letters')
      .required(),
    passwordConfirm: Yup.string()
      .min(8)
      .max(18, 'Password cannot be more than 18 letters')
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    portfolio: Yup.string().url('Portfolio must be a valid URL'),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(SignUpForm);

export default SignUp;
