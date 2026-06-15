import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { FormInput, FormSelect } from '../components';
import * as Yup from 'yup';

const initialValues: Record<string, any> = {};
const requiredFields: Record<string, any> = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations?.length) continue;

  let schema = Yup.string();

  for (const validation of input.validations) {
    if (validation.type === 'required') {
      schema = schema.required(validation.message);
    }

    if (validation.type === 'minLength') {
      schema = schema.min((validation as any).value || 2, validation.message);
    }

    if (validation.type === 'pattern') {
      const regex = new RegExp((validation as any).value);
      schema = schema.matches(regex, validation.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form noValidate>
            {formJson.map(
              ({ fieldType, name, label, placeholder, type, options }) => {
                switch (fieldType) {
                  case 'input':
                    return (
                      <FormInput
                        key={name}
                        type={type}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                      />
                    );

                  case 'select':
                    return (
                      <FormSelect key={name} name={name} label={label}>
                        <option value="">Select an option</option>
                        {options?.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </FormSelect>
                    );

                  default:
                    return <span>Type: {fieldType} not supported</span>;
                }
              }
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
