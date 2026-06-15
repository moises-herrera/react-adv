import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const FormInput: FC<FormInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-field-container">
      <label htmlFor={props.name}>{label}</label>
      <input className="form-field" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </div>
  );
};
