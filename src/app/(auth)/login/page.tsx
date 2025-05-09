import React from 'react';
import WelcomeMessage from '@/components/pages/auth/WelcomeMessage';
import LogInSection from '@/components/pages/auth/LogInSection';

export default function Page() {
  return (
    <main className="px-[1.75rem] mx-auto min-h-screen">
      <WelcomeMessage />
      <LogInSection />
    </main>
  );
}
