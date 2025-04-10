import React from 'react';
import { useFunnel } from '@/action/funnel';

import { useSignUpForms } from '@/actions/signup-service';

import PolicyAgreePage from '@/components/pages/auth/signup/PolicyAgreePage';
import EmailCertificationPage from '@/components/pages/auth/signup/EmailCertificationPage';
import LoginInfoInputPage from './LoginInfoInputPage';
import PersonalInfoPage from './PersonalInfoPage';
import NicknamePage from './NicknamePage';
import Stepper from '@/components/ui/Stepper';

export default function SignUpSteps() {
  const { Funnel, setStep, Step } = useFunnel('약관');

  const signUpData = useSignUpForms();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(signUpData);
  };

  return (
    <form onSubmit={handleSubmit} className="group">
      <Stepper totalSteps={4} />
      <Funnel>
        <Step name="약관">
          <PolicyAgreePage onNext={() => setStep('이메일')} />
        </Step>
        <Step name="이메일">
          <EmailCertificationPage onNext={() => setStep('로그인정보')} />
        </Step>
        <Step name="로그인정보">
          <LoginInfoInputPage onNext={() => setStep('개인정보')} />
        </Step>
        <Step name="개인정보">
          <PersonalInfoPage onNext={() => setStep('닉네임')} />
        </Step>
        <Step name="닉네임">
          <NicknamePage onNext={() => setStep('테스트')} />
        </Step>
      </Funnel>
    </form>
  );
}
