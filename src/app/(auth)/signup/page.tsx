'use client';
// import { Button } from '@/components/ui/button';
// import PolicyAgreementPage from '@/components/pages/auth/signup/PolicyAgreementPage';
import SignUpSteps from '@/components/pages/auth/signup/SignUpSteps';
import SignUpContextProvider from '@/provider/SignUpContextProvider';

export default function Signup() {
  return (
    <main>
      <SignUpContextProvider>
        <SignUpSteps />
      </SignUpContextProvider>
    </main>
  );
}
