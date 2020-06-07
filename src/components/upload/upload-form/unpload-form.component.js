import React from 'react';

const UploadForm = ({
  values,
  touched,
  handleSubmit,
  handleChange,
  errors,
}) => (
  <form onSubmit={handleSubmit}>
    <div className='form-group'>
      <label htmlFor='description'>Description</label>
      <input
        id='description'
        name='description'
        type='text'
        className='form-control'
        value={values.description}
        onChange={handleChange}
      />
      {errors.description && touched.description && <p>{errors.description}</p>}
    </div>
    <div className='form-group'>
      <label htmlFor='tags'>Tags</label>
      <input
        id='tags'
        name='tags'
        type='text'
        className='form-control'
        value={values.tags}
        onChange={handleChange}
      />
      {errors.tags && touched.tags && <p>{errors.tags}</p>}
    </div>

    <button type='submit' className='btn btn-primary'>
      submit
    </button>
  </form>
);

export default UploadForm;
