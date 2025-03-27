import WelcomeMessage from '@/components/pages/auth/WelcomeMessage';
import React from 'react';
import LogInSection from '@/components/pages/auth/LogInSection';

export default function LogIn() {
  return (
    <main className="px-[28px] mx-auto h-screen">
      <WelcomeMessage />
      <LogInSection />
    </main>
  );
}
