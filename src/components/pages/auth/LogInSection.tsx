import React from 'react';
import LogInInput from './LogInInput';
import { Button } from '@/components/ui/button';
import WelcomeMessage from './WelcomeMessage';

export default function LogInSection() {
  return (
    <main className="flex flex-col justify-between items-center px-[28px]">
      <section className="flex flex-col justify-center gap-[58px]">
        <WelcomeMessage />
        <LogInInput />
      </section>
      <nav>...</nav>
      <section className="w-full flex justify-center mt-[282px]">
        <Button size="default" color="green">
          로그인
        </Button>
      </section>
    </main>
  );
}
