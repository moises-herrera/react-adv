import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormFieldContainer } from '../components/FormFieldContainer';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const { errors, touched, handleSubmit, getFieldProps } =
    useFormik<FormValues>({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
    });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <FormFieldContainer
          errorMessage={touched.firstName ? errors.firstName : ''}
        >
          <label htmlFor="firstName">First Name</label>
          <input type="text" {...getFieldProps('firstName')} />
        </FormFieldContainer>

        <FormFieldContainer
          errorMessage={touched.lastName ? errors.lastName : ''}
        >
          <label htmlFor="lastName">Last Name</label>
          <input type="text" {...getFieldProps('lastName')} />
        </FormFieldContainer>

        <FormFieldContainer errorMessage={touched.email ? errors.email : ''}>
          <label htmlFor="email">Email</label>
          <input type="text" {...getFieldProps('email')} />
        </FormFieldContainer>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
