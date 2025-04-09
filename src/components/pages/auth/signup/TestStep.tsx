import React, { useEffect } from 'react';
import { SignUpContext } from '@/context/SignUpContext';
import { useContext } from 'react';

export default function TestStep() {
  const { emailForm, policyCheckedForm, idForm, nicknameForm, personalForm } =
    useContext(SignUpContext);
  const formdata = {
    ...emailForm,
    ...policyCheckedForm,
    ...idForm,
    ...nicknameForm,
    ...personalForm,
  };
  useEffect(() => {
    console.log(formdata);
  });
  return (
    <div>
      TestStep
      <button type="submit">제출하기</button>
    </div>
  );
}
