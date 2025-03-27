import React from 'react';
import WelcomeMessage from '@/components/pages/auth/WelcomeMessage';
import LogInSection from '@/components/pages/auth/LogInSection';

export default function LogIn() {
  return (
    <main className="px-[28px] mx-auto min-h-screen">
      <WelcomeMessage />
      <LogInSection />
    </main>
  );
}
