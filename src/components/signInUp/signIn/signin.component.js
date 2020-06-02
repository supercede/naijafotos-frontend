import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form } from 'formik';
import { Button, Row } from 'reactstrap';
import SocialButtons from '../socialBtns/socialBtns.component';
import FormControl from '../../shared/formControl/form-row.component';
import './signin.style.scss';

function SignInForm({ errors, touched, isSubmitting }) {
  return (
    <div className=''>
      <h2 className='text-center'>Welcome Back</h2>
      {/* <h6 className='text-center'></h6> */}
      <SocialButtons action='Sign in' />
      <Form className='form'>
        <FormControl
          title='Username/Email'
          touched={touched}
          errors={errors}
          name='email'
          type='text'
        />
        <FormControl
          title='Password'
          touched={touched}
          errors={errors}
          name='password'
          type='password'
        />
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
