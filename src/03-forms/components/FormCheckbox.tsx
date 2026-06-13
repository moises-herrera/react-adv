import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

interface FormCheckboxProps {
  label: string;
  name: string;
  [key: string]: any;
}

export const FormCheckbox: FC<FormCheckboxProps> = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="form-field-container">
      <label>
        <input className="form-field" type="checkbox" {...field} {...props} />{' '}
        {label}
      </label>

      <ErrorMessage name={props.name} component="span" />
    </div>
  );
};
