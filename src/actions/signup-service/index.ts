import { useContext } from 'react';
import { SignUpContext } from '@/context/SignUpContext';

export const useSignUpForms = () => {
  const { idForm, emailForm, personalForm, nicknameForm } =
    useContext(SignUpContext);

  console.log('id', idForm);
  return {
    ...idForm,
    ...emailForm,
    ...personalForm,
    ...nicknameForm,
  };
};
