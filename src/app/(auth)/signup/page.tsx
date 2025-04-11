'use client';
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
