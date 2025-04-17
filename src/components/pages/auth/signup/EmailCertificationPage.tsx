import { Button } from '@/components/ui/Button';
import NextButton from '@/components/ui/NextButton';
import { SignUpContext } from '@/context/SignUpContext';
import { cn } from '@/lib/utils';
import { useState, useContext } from 'react';
import SignupInput from '@/components/ui/SignupInput';
import SignupTitleWrapper from '@/components/ui/wrapper/SignupTitleWrapper';
import InputSectionWrapper from '@/components/ui/wrapper/InputSectionWrapper';
import { sendEmail } from '@/action/email-service';
export default function EmailCertificationPage({
  onNext,
}: {
  onNext: () => void;
}) {
  const { setemailForm, setSteps } = useContext(SignUpContext);
  const [email, setEmail] = useState<string>(''); // 이메일 앞부분 상태 관리
  const [certi, setCerti] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [valid, setValid] = useState<string>('unclear');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCerti = async () => {
    setCerti(true);
    console.log('인증');
    const res = await sendEmail(email, '회원가입');
    console.log(res);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleVerify = () => {
    console.log(code);
    setValid('clear');
  };

  const handleNext = () => {
    setSteps((prev) => prev + 1);
    setemailForm({ email });
    onNext();
  };

  return (
    <>
      <SignupTitleWrapper>
        회원가입을 위해 이메일 인증을 진행해주세요.
      </SignupTitleWrapper>

      <InputSectionWrapper>
        <SignupInput
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="starbucks@example.com"
        />
        <Button type="button" className="w-full" onClick={handleCerti}>
          인증받기
        </Button>
        <div
          id="hiddenInput"
          className={cn(
            certi ? 'flex' : 'hidden',
            'gap-x-2 items-center ',
            valid
          )}
        >
          <SignupInput
            name="verifyCode"
            value={code}
            onChange={handleCodeChange}
            placeholder="인증 코드를 입력해주세요"
          />

          <Button type="button" onClick={handleVerify} size={'hug'}>
            인증 확인
          </Button>
        </div>
      </InputSectionWrapper>

      <NextButton onClick={handleNext} />
    </>
  );
}
