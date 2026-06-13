import { FormFieldContainer } from '../components/FormFieldContainer';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password,
    confirmPassword,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm<RegisterData>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register</h1>

      <form noValidate onSubmit={onSubmit}>
        <FormFieldContainer
          errorMessage={!name.trim() ? 'Name is required' : ''}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={onChange}
            className={!name.trim() ? 'has-error' : ''}
          />
        </FormFieldContainer>
        <FormFieldContainer
          errorMessage={!isValidEmail(email) ? 'Email invalid' : ''}
        >
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={onChange}
            className={!isValidEmail(email) ? 'has-error' : ''}
          />
        </FormFieldContainer>
        <FormFieldContainer
          errorMessage={
            !password.trim()
              ? 'Password is required'
              : password.length < 8
                ? 'Password must be at least 8 characters'
                : ''
          }
        >
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className={
              !password.trim() || password.length < 8 ? 'has-error' : ''
            }
          />
        </FormFieldContainer>
        <FormFieldContainer
          errorMessage={
            !confirmPassword.trim()
              ? 'Confirm password is required'
              : confirmPassword !== password
                ? 'Passwords do not match'
                : ''
          }
        >
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={onChange}
            className={
              !confirmPassword.trim() || confirmPassword !== password
                ? 'has-error'
                : ''
            }
          />
        </FormFieldContainer>

        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
