'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const login = async (formData: FormData) => {
  console.log(formData);
  const loginId = formData.get('loginId') as string;
  const password = formData.get('password') as string;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/member/sign-in`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loginId, password }),
    }
  );
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    (await cookies()).set('accessToken', data.result.accessToken);
    (await cookies()).set('refreshToken', data.result.refreshToken);
    redirect('/main');
  } else {
    console.log('로그인 실패');
  }
};
