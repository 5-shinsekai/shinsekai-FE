import { SignUpContext } from '@/context/SignUpContext';
import { useState } from 'react';

export const SignUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [idForm, setIdForm] = useState({ id: '', password: '' });
  const [namesForm, setNamesForm] = useState({ name: '', phone: '' });
  const [addressForm, setAddressForm] = useState({ address: '' });
  const [nicknameForm, setNicknameForm] = useState({ nickname: '' });
  const [formData, setFormData] = useState({ input1: '', input2: '' });

  const value = {
    idForm,
    setIdForm,
    namesForm,
    setNamesForm,
    addressForm,
    setAddressForm,
    nicknameForm,
    setNicknameForm,
    formData,
    setFormData,
  };

  return (
    <SignUpContext.Provider {...{ value }}>{children}</SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
