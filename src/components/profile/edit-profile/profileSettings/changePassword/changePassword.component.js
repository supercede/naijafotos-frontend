import React from 'react';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import { Row, Button } from 'reactstrap';
import FormControl from '../../../../shared/formControl/form-row.component';
import './changePassword.style.scss';

function ChangePasswordForm({ errors, touched, isSubmitting }) {
  return (
    <div className='change-password'>
      <Form>
        <h3 className='title row mb-4'>Change Password</h3>
        <FormControl
          title='Current Password'
          touched={touched}
          errors={errors}
          name='currentPassword'
          type='password'
          required
        />

        <FormControl
          title='New Password'
          touched={touched}
          errors={errors}
          name='password'
          type='password'
          required
        />

        <FormControl
          title='Confirm New Password'
          touched={touched}
          errors={errors}
          name='passwordConfirm'
          type='password'
          required
        />

        <Row className='mt-5'>
          <Button
            type='submit'
            disabled={isSubmitting}
            className='form-control bg-dark'
          >
            Update Profile
          </Button>
        </Row>
      </Form>
    </div>
  );
}

const ChangePassword = withFormik({
  mapPropsToValues() {
    return {
      currentpassword: '',
      password: '',
      passwordConfirm: '',
    };
  },
  validationSchema: Yup.object().shape({
    currentPassword: Yup.string()
      .min(8)
      .max(40, 'Password cannot be more than 40 letters')
      .required(),
    password: Yup.string()
      .min(8)
      .max(40, 'Password cannot be more than 40 letters')
      .required(),
    passwordConfirm: Yup.string()
      .min(8, 'This field must be at least 8 characters')
      .max(40, 'Password cannot be more than 40 letters')
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(ChangePasswordForm);

export default ChangePassword;
