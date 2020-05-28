import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form } from 'formik';
import { Button, Row } from 'reactstrap';
import SocialButtons from '../socialBtns/socialBtns.component';
import FormControl from '../form-row.component';
import './signup.style.scss';

function SignUpForm({ errors, touched, isSubmitting }) {
  return (
    <div className=''>
      <h2 className='text-center'>Get a free Account</h2>
      {/* <h6 className='text-center'></h6> */}
      <SocialButtons action='Sign up' className='m-10' />
      <Form className='form'>
        <FormControl
          title='Name'
          touched={touched}
          errors={errors}
          name='name'
          placeholder='John Doe'
          type='text'
          required
        />
        <FormControl
          title='Username'
          touched={touched}
          errors={errors}
          name='userName'
          placeholder='john_01'
          type='text'
          required
        />
        <FormControl
          title='Email'
          touched={touched}
          errors={errors}
          name='email'
          placeholder='me@mail.com'
          type='email'
          required
        />
        <FormControl
          title='Password'
          touched={touched}
          errors={errors}
          name='password'
          type='password'
          required
        />
        <FormControl
          title='Confirm Password'
          touched={touched}
          errors={errors}
          name='passwordConfirm'
          type='password'
          required
        />
        <FormControl
          title='Portfolio (Optional)'
          touched={touched}
          errors={errors}
          name='portfolio'
          type='url'
          placeholder='https://instagram.com/johndoe1'
        />
        <Row className='mt-3'>
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
      .required('Username is required')
      .min(3)
      .max(20)
      .matches(
        /^[a-zA-Z0-9_]*$/,
        'Username can only contain numbers, letters and underscores'
      ),
    email: Yup.string()
      .email()
      .required('Email is required'),
    password: Yup.string()
      .min(8)
      .max(18, 'Password cannot be more than 18 letters')
      .required(),
    passwordConfirm: Yup.string()
      .min(8, 'This field must be at least 8 characters')
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
