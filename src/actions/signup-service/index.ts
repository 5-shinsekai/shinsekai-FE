import { useContext } from 'react';
import { SignUpContext } from '@/context/SignUpContext';

export const useSignUpForms = () => {
  const { idForm, emailForm, personalForm, nicknameForm } =
    useContext(SignUpContext);
  console.log(nicknameForm);
  return {
    ...idForm,
    ...emailForm,
    ...personalForm,
    ...nicknameForm,
  };
};

export const signup = async (data: {
  nickname: string;
  name: string;
  phone: string;
  gender: string;
  birth: string;
  email: string;
  loginId: string;
  password: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/sign-up`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};
