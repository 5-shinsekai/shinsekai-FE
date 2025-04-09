import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function LoginInfoInputPage({ onNext }: { onNext: () => void }) {
  const { setIdForm } = useContext(SignUpContext);
  const [loginForm, setLoginForm] = useState<{
    loginId: string;
    password: string;
  }>({
    loginId: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`${name}:`, value);
  };

  const handleNext = () => {
    setIdForm(loginForm);
    onNext();
  };

  return (
    <div>
      <p>아이디</p>
      <input
        name="loginId"
        type="text"
        onChange={handleChange}
        value={loginForm.loginId}
      />
      <p>비밀번호</p>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={loginForm.password}
      />

      <button onClick={handleNext}>다음</button>
    </div>
  );
}
