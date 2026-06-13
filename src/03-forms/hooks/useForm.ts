import { useState } from 'react';

interface UseFormProps<T> {
  initialValues?: T;
}

export const useForm = <T>({ initialValues }: UseFormProps<T>) => {
  const [formData, setFormData] = useState<T>((initialValues ?? {}) as T);

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData((initialValues ?? {}) as T);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    formData,
    onChange,
    resetForm,
    isValidEmail,
  };
};
