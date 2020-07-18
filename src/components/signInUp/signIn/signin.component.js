import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form } from 'formik';
import { Button, Row } from 'reactstrap';
import SocialButtons from '../socialBtns/socialBtns.component';
import FormControl from '../../shared/formControl/form-row.component';
import { userActions } from '../../../redux/_actions';
import './signin.style.scss';
import { connect } from 'react-redux';

function SignInForm({ errors, touched, isSubmitting, ...props }) {
  console.log(props);
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

const EnhancedSignInForm = withFormik({
  mapPropsToValues() {
    return { email: '', password: '' };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email or Username is required'),
    password: Yup.string()
      .min(8)
      .max(40, 'Password cannot be more than 40 letters')
      .required(),
  }),
  handleSubmit(values, { props }) {
    console.log(values);
    props.login(values);
  },
})(SignInForm);

const mapState = (state) => {
  const { loggingIn } = state.authReducer;
  return { loggingIn };
};

const actionCreator = {
  login: userActions.login,
};

const SignIn = connect(mapState, actionCreator)(EnhancedSignInForm);

export default SignIn;
