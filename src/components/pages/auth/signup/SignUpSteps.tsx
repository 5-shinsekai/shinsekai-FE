'use client';

import React from 'react';
import { useFunnel } from '@/action/funnel';

import PolicyAgreePage from '@/components/pages/auth/signup/PolicyAgreePage';
// import SignUpStep2 from '@/components/pages/auth/signup/SignUpStep2';
import SignUpStep3 from '@/components/pages/auth/signup/SignUpStep3';
import SignUpContextProvider from '@/provider/SignUpContextProvider';
// import SignUpStep4 from '@/components/pages/auth/signup/SignUpStep4';
import TestStep from './TestStep';

export default function SignUpSteps() {
  const { Funnel, setStep, Step } = useFunnel('정보1');
  return (
    <SignUpContextProvider>
      <form>
        <Funnel>
          <Step name="정보1">
            <PolicyAgreePage onNext={() => setStep('정보2')} />
          </Step>
          <Step name="정보2">
            <TestStep />
          </Step>
          <Step name="정보3">
            <PolicyAgreePage onNext={() => setStep('정보4')} />
          </Step>
          <Step name="2">
            <SignUpStep3 />
          </Step>
        </Funnel>
      </form>
    </SignUpContextProvider>
  );
}
