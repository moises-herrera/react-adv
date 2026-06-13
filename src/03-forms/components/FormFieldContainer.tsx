import { FC, PropsWithChildren } from 'react';

interface FormFieldContainerProps extends PropsWithChildren {
  errorMessage?: string;
}

export const FormFieldContainer: FC<FormFieldContainerProps> = ({
  children,
  errorMessage,
}) => {
  return (
    <div className="form-field-container">
      {children}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
