import React from 'react';
import { withFormik, Form } from 'formik';
import { Row, Button } from 'reactstrap';
import * as Yup from 'yup';
import FormControl from '../../../../shared/formControl/form-row.component';
import './closeAccount.style.scss';

function CloseAccountForm({ errors, touched, isSubmitting }) {
  return (
    <div className='close-account mb-4'>
      <h3>Close Account</h3>
      <p>
        <span className='warning'>Warning: </span>
        This action is not reversible. All your photos and collections will be
        deleted
      </p>
      <Form className='ml-3'>
        <FormControl
          title='Current Password'
          touched={touched}
          errors={errors}
          name='currentPassword'
          type='password'
          required
        />

        <Row className=''>
          <Button
            type='submit'
            disabled={isSubmitting}
            className='form-control warning-btn'
          >
            Close my Account
          </Button>
        </Row>
      </Form>
    </div>
  );
}

const CloseAccount = withFormik({
  mapPropsToValues: (props) => {
    return {
      currentPassword: '',
    };
  },
  validationSchema: Yup.object().shape({
    currentPassword: Yup.string()
      .min(8)
      .max(40, 'Password cannot be more than 40 letters')
      .required(),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(CloseAccountForm);

export default CloseAccount;
