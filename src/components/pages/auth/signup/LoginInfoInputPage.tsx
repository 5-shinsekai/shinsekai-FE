import NextButton from '@/components/ui/NextButton';
import SignupInput from '@/components/ui/SignupInput';
import InputSectionWrapper from '@/components/ui/wrapper/InputSectionWrapper';
import SignupTitleWrapper from '@/components/ui/wrapper/SignupTitleWrapper';
import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function LoginInfoInputPage({ onNext }: { onNext: () => void }) {
  const { setIdForm, setSteps } = useContext(SignUpContext);
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
  };

  const handleNext = () => {
    setSteps((prev) => prev + 1);
    setIdForm(loginForm);
    onNext();
  };

  return (
    <>
      <SignupTitleWrapper>아이디와 비밀번호를 입력해주세요.</SignupTitleWrapper>
      <InputSectionWrapper>
        <SignupInput
          name="loginId"
          onChange={handleChange}
          value={loginForm.loginId}
          placeholder="아이디"
        />
        <SignupInput
          type="password"
          name="password"
          onChange={handleChange}
          value={loginForm.password}
          placeholder="비밀번호"
        />
      </InputSectionWrapper>
      <NextButton onClick={handleNext} />
    </>
  );
}
