import * as Yup from 'yup';

const YupSignUpValidation = (scope) => {
  const validationObject = {
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
  };

  if (scope === 'signup') {
    validationObject.password = Yup.string()
      .min(8)
      .max(40, 'Password cannot be more than 40 letters')
      .required();

    validationObject.passwordConfirm = Yup.string()
      .min(8, 'This field must be at least 8 characters')
      .max(40, 'Password cannot be more than 40 letters')
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match');
  }

  if (scope === 'profile') {
    validationObject.portfolio = Yup.string().url(
      'Portfolio must be a valid URL'
    );

    validationObject.bio = Yup.string().max(
      400,
      'Password cannot be more than 400 letters'
    );
  }

  return Yup.object().shape(validationObject);
};

export default YupSignUpValidation;
