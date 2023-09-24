import { FormInputLabel, Input, Group } from './form-input.styles';
import { InputHTMLAttributes, FC } from 'react';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={
            !!(
              otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
            )
          }
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
