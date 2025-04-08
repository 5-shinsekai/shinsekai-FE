import React, { useEffect } from 'react';
import { SignUpContext } from '@/context/SignUpContext';
import { useContext } from 'react';

export default function TestStep() {
  const { formData } = useContext(SignUpContext);
  useEffect(() => {
    console.log(formData);
  });
  return <div>TestStep</div>;
}
