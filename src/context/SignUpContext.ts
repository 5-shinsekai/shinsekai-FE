'use client';
import { createContext, useContext } from 'react';

interface SignUpContextType {
  idForm: { id: string; password: string };
  setIdForm: React.Dispatch<
    React.SetStateAction<{ id: string; password: string }>
  >;
  namesForm: { name: string; phone: string };
  setNamesForm: React.Dispatch<
    React.SetStateAction<{ name: string; phone: string }>
  >;
  addressForm: { address: string };
  setAddressForm: React.Dispatch<React.SetStateAction<{ address: string }>>;
  nicknameForm: { nickname: string };
  setNicknameForm: React.Dispatch<React.SetStateAction<{ nickname: string }>>;
  formData: { input1: string; input2: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{ input1: string; input2: string }>
  >;
}

export const SignUpContext = createContext<SignUpContextType>({
  idForm: { id: '', password: '' },
  setIdForm: () => {},
  namesForm: { name: '', phone: '' },
  setNamesForm: () => {},
  addressForm: { address: '' },
  setAddressForm: () => {},
  nicknameForm: { nickname: '' },
  setNicknameForm: () => {},
  formData: { input1: '', input2: '' },
  setFormData: () => {},
});

export const useSignUpContext = () => useContext(SignUpContext);
