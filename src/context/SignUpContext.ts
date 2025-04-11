'use client';
import { createContext, useContext } from 'react';

interface SignUpContextType {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  policyCheckedForm: { checkedId: number[] };
  setPolicyCheckedForm: React.Dispatch<
    React.SetStateAction<{ checkedId: number[] }>
  >;
  idForm: { loginId: string; password: string };
  setIdForm: React.Dispatch<
    React.SetStateAction<{ loginId: string; password: string }>
  >;
  personalForm: { name: string; phone: string; gender: string; birth: string };
  setPersonalForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      phone: string;
      gender: string;
      birth: string;
    }>
  >;
  nicknameForm: { nickname: string };
  setNicknameForm: React.Dispatch<React.SetStateAction<{ nickname: string }>>;
  emailForm: { email: string };
  setemailForm: React.Dispatch<React.SetStateAction<{ email: string }>>;
}

export const SignUpContext = createContext<SignUpContextType>({
  steps: 0,
  setSteps: () => {},
  policyCheckedForm: { checkedId: [] },
  setPolicyCheckedForm: () => {},
  idForm: { loginId: '', password: '' },
  setIdForm: () => {},
  personalForm: { name: '', phone: '', gender: '', birth: '' },
  setPersonalForm: () => {},
  nicknameForm: { nickname: '' },
  setNicknameForm: () => {},
  emailForm: { email: '' },
  setemailForm: () => {},
});

export const useSignUpContext = () => useContext(SignUpContext);
