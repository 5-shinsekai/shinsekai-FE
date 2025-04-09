import { SignUpContext } from '@/context/SignUpContext';
import { useState } from 'react';

export const SignUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [policyCheckedForm, setPolicyCheckedForm] = useState<{
    checkedId: number[];
  }>({ checkedId: [] });
  const [idForm, setIdForm] = useState({ loginId: '', password: '' });
  const [personalForm, setPersonalForm] = useState({
    name: '',
    phone: '',
    gender: '',
    birth: '',
  });
  const [nicknameForm, setNicknameForm] = useState({ nickname: '' });
  const [emailForm, setemailForm] = useState({ email: '' });

  const value = {
    policyCheckedForm,
    setPolicyCheckedForm,
    idForm,
    setIdForm,
    personalForm,
    setPersonalForm,
    nicknameForm,
    setNicknameForm,
    emailForm,
    setemailForm,
  };

  return (
    <SignUpContext.Provider {...{ value }}>{children}</SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
