import React from 'react';
import { withFormik, Form } from 'formik';
import { Button, Row } from 'reactstrap';
import { connect } from 'react-redux';
import SocialButtons from '../socialBtns/socialBtns.component';
import FormControl from '../../shared/formControl/form-row.component';
import YupSignUpValidation from '../../shared/yupValidation/yupValidation';
import './signup.style.scss';

import { userActions } from '../../../redux/_actions';

function SignUpForm({ errors, touched, isSubmitting, ...props }) {
  console.log(props);
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

const EnhancedSignUpForm = withFormik({
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
  validationSchema: YupSignUpValidation('signup'),
  handleSubmit(values, { props }) {
    if (values.portfolio === '') {
      delete values.portfolio;
    }
    props.register(values);
  },
})(SignUpForm);

const mapState = (state) => {
  const { registering } = state.signupReducer;
  return { registering };
};

const actionCreator = {
  register: userActions.register,
};

const SignUp = connect(mapState, actionCreator)(EnhancedSignUpForm);

export default SignUp;
