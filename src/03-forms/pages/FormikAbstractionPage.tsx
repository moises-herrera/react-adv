import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormInput, FormSelect, FormCheckbox } from '../components';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  terms: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
  jobType: Yup.string()
    .notOneOf(['other'], 'This option is not allowed')
    .required('Required'),
});

export const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <FormInput
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
            />
            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="worker@example.com"
            />

            <FormSelect name="jobType" label="Job Type">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </FormSelect>

            <FormCheckbox
              name="terms"
              label="I agree to the terms and
                conditions"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
