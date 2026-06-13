import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormFieldContainer } from '../components/FormFieldContainer';
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

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <FormFieldContainer>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="span" />
            </FormFieldContainer>

            <FormFieldContainer>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="span" />
            </FormFieldContainer>

            <FormFieldContainer>
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="span" />
            </FormFieldContainer>

            <FormFieldContainer>
              <label htmlFor="jobType">Job Type</label>
              <Field as="select" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </Field>

              <ErrorMessage name="jobType" component="span" />
            </FormFieldContainer>

            <FormFieldContainer>
              <label>
                <Field type="checkbox" name="terms" />I agree to the terms and
                conditions
              </label>

              <ErrorMessage name="terms" component="span" />
            </FormFieldContainer>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
