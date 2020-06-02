import React from 'react';
import { withFormik, Form } from 'formik';
import { Row, Button } from 'reactstrap';
import avatar from '../../../../assets/images/avatar.jpg';
import FormControl from '../../../shared/formControl/form-row.component';
import './profileSettings.style.scss';

function ProfileSettingsForm({ errors, touched, isSubmitting }) {
  return (
    <div className='edit-profile'>
      <div className='edit-image text-center'>
        <figure>
          <img src={avatar} alt='' className='rounded-circle edit-image__img' />
        </figure>
        <label className='btn btn-white border-bottom-1 img-label'>
          <i className='fa fa-image'></i> Change Avatar
          <input
            type='file'
            name='avatar'
            className='d-none'
            accept='image/x-png,image/jpg,image/jpeg'
          />
        </label>
      </div>
      <Form>
        <FormControl
          title='Name'
          touched={touched}
          errors={errors}
          name='name'
          type='text'
        />
        <FormControl
          title='Email'
          touched={touched}
          errors={errors}
          name='email'
          type='email'
        />
        <FormControl
          title='Username'
          touched={touched}
          errors={errors}
          name='userName'
          type='text'
        />
        <FormControl
          title='Portfolio'
          touched={touched}
          errors={errors}
          name='portfolio'
          type='url'
        />
        <FormControl
          as='textarea'
          title='Bio'
          touched={touched}
          errors={errors}
          name='bio'
          rows='7'
          maxLength='400'
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

const ProfileSettings = withFormik({
  mapPropsToValues() {
    return { name: '', email: '', userName: '', portfolio: '', bio: '' };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(ProfileSettingsForm);

export default ProfileSettings;
