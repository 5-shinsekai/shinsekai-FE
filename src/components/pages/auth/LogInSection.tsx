'use client';
import React, { useState } from 'react';
import LogInForm from './LogInInForm';
import AuthMenu from './AuthMenu';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LogInSection() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginId = formData.get('loginId') as string;
    const password = formData.get('password') as string;

    try {
      const res = await signIn('credentials', {
        loginId,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('아이디 또는 비밀번호가 일치하지 않습니다.');
        return;
      }

      if (res?.ok) {
        const callbackUrl = searchParams.get('callbackUrl');
        router.push(callbackUrl || '/');
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setError('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <form onSubmit={handleSignIn} className="h-full">
      <LogInForm />
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <AuthMenu />
      <ButtonWrapper>
        <Button
          type="submit"
          size="default"
          color="green"
          className="w-full h-10"
        >
          로그인
        </Button>
      </ButtonWrapper>
    </form>
  );
}
