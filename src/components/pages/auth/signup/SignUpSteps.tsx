import React from 'react';
import { useFunnel } from '@/action/funnel';

import { signup, useSignUpForms } from '@/actions/signup-service';

import PolicyAgreePage from '@/components/pages/auth/signup/PolicyAgreePage';
import EmailCertificationPage from '@/components/pages/auth/signup/EmailCertificationPage';
import LoginInfoInputPage from './LoginInfoInputPage';
import PersonalInfoPage from './PersonalInfoPage';
import NicknamePage from './NicknamePage';
import Stepper from '@/components/ui/Stepper';
import { useRouter } from 'next/navigation';
export default function SignUpSteps() {
  const { Funnel, setStep, Step } = useFunnel('약관');

  const router = useRouter();

  const signUpData = useSignUpForms();
  const handleSubmit = async (item: string) => {
    signUpData.nickname = item;
    console.log(signUpData);
    const res = await signup(signUpData);
    console.log(res);
    // router.push('/main');
  };

  return (
    <form className="group">
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
          <NicknamePage onNext={handleSubmit} />
        </Step>
      </Funnel>
    </form>
  );
}
