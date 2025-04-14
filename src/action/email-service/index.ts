'use server';

export const sendEmail = async (email: string, mailType: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/email/send-verification`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, mailType }),
    }
  );
  return response.json();
};
