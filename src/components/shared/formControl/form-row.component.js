import React from 'react';
import { Row, Label } from 'reactstrap';
import { Field } from 'formik';

const FormControl = ({
  title,
  touched,
  errors,
  type,
  name,
  id = name,
  labelFor = name,
  placeholder = '',
  as = '',
  maxLength = '',
  rows = '',
}) => (
  <Row className='form-group'>
    <Label htmlFor={labelFor}>{title}</Label>
    <Field
      type={type}
      className='form-control'
      name={name}
      id={id}
      placeholder={placeholder}
      as={as === '' ? null : as}
      maxLength={as === '' ? null : maxLength}
      rows={as === '' ? null : rows}
    />
    {touched[`${name}`] && errors[`${name}`] && (
      <p className='warning-text'>{errors[`${name}`]}</p>
    )}
  </Row>
);

export default FormControl;
