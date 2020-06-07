import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik } from 'formik';
import * as Yup from 'yup';
import UploadForm from './upload-form/unpload-form.component';
import './upload.style.scss';

const uploadValidation = Yup.object().shape({
  description: Yup.string().required('*required'),
  tags: Yup.string().required('*required'),
  avatar: Yup.mixed().notOneOf(['', null, ' ']),
});

function Upload({ errors, touched, isSubmitting }) {
  const [files, setFiles] = useState([]);
  let avatar;
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpeg,.png,.jpg',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => {
          if (file.size < 300000) {
            return null;
          }
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    },
  });

  const thumbs = files.map((file) => {
    if (file) {
      return (
        <div className='thumb' key={file.name}>
          <div className='thumbInner'>
            <img src={file.preview} alt={file.name} />
          </div>
        </div>
      );
    }

    return 'Invalid Picture (Pictures should be at least 500*500)';
  });

  console.log(typeof thumbs[0]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file ? file.preview : ''));
    },
    [files],
    (avatar = files[0])
  );

  return (
    <div className='upload mt-3 container'>
      <div className='upload__guidelines'>
        <h2>Upload a photo</h2>
        <p>Please note the following:</p>
        <ul className='upload__guidelines--list'>
          <li>Your uploads will be distributed for free</li>
          <li>
            Please ensure that your images are at least 500*500 pixels (0.3MP)
          </li>
          <li>We have zero tolerance for nudity, violence or hate</li>
          <li>Accepted formats are jpg, jpeg and PNG</li>
        </ul>
      </div>
      <section {...getRootProps({ className: 'dropzone' })}>
        <input
          {...getInputProps()}
          type='file'
          name='avatar'
          className='d-none'
        />
        <p>
          <span role='button' className='btn btn-secondary'>
            Browse
          </span>
          <span className='d-none d-md-inline'>&nbsp;or Drop Image</span>
        </p>
      </section>
      <div className='row mt-5 preview'>
        <div className='preview__img col-md-6 col-12'>{thumbs}</div>
        <div
          className={`preview__data col-md-6 col-12 ${
            typeof thumbs[0] === 'string' || typeof thumbs[0] === 'undefined'
              ? 'd-none'
              : ''
          }`}
        >
          <Formik
            initialValues={{
              description: '',
              tags: [],
              avatar,
            }}
            onSubmit={async (values) => {
              let formData = new FormData();

              formData.append('description', values.description);
              formData.append('tags', values.tags);
              formData.append('avatar', avatar);

              console.log(formData.get('description'));
              console.log(formData.get('avatar'));
            }}
            validationSchema={uploadValidation}
            render={({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => (
              <UploadForm
                values={values}
                touched={touched}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
