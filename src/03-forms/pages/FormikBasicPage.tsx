import { FormikErrors, useFormik } from 'formik';
import { FormFieldContainer } from '../components/FormFieldContainer';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (firstName.length >= 15) {
      errors.firstName = 'First name must be 15 characters or less';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (lastName.length >= 10) {
      errors.lastName = 'Last name must be 10 characters or less';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<FormValues>({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic</h1>

      <form noValidate onSubmit={handleSubmit}>
        <FormFieldContainer
          errorMessage={touched.firstName ? errors.firstName : ''}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormFieldContainer>

        <FormFieldContainer
          errorMessage={touched.lastName ? errors.lastName : ''}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormFieldContainer>

        <FormFieldContainer errorMessage={touched.email ? errors.email : ''}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormFieldContainer>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
