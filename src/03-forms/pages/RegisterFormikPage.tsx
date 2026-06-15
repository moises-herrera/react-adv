import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../components';
import '../styles/styles.css';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: RegisterData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name must be less than 15 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const RegisterFormikPage = () => {
  console.log('Render Formik');

  const onSubmit = (values: RegisterData) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Register Formik</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleReset }) => (
          <Form>
            <FormInput name="name" label="Name" placeholder="Enter your name" />
            <FormInput
              name="email"
              label="Email"
              placeholder="worker@example.com"
            />
            <FormInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
            />

            <button type="submit">Register</button>
            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
