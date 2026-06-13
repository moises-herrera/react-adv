import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

interface FormSelectProps {
  label: string;
  name: string;
  [key: string]: any;
}

export const FormSelect: FC<FormSelectProps> = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="form-field-container">
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </div>
  );
};
