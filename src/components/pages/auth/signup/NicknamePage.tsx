import { useSignUpForms } from '@/actions/signup-service';
import SignupInput from '@/components/ui/SignupInput';
import SubmitButton from '@/components/ui/SubmitButton';
import InputSectionWrapper from '@/components/ui/wrapper/InputSectionWrapper';
import SignupTitleWrapper from '@/components/ui/wrapper/SignupTitleWrapper';
import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function NicknamePage({ onNext }: { onNext: () => void }) {
  const { setNicknameForm } = useContext(SignUpContext);
  const [nickname, setNickname] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const forms = useSignUpForms();
  const handleSubmit = () => {
    console.log('버튼이 클릭되었어요');
    setNicknameForm({ nickname });
    console.log('테스트');
    console.log(forms);
    onNext();
  };
  return (
    <>
      <SignupTitleWrapper>사용하실 닉네임을 입력해주세요.</SignupTitleWrapper>

      <InputSectionWrapper>
        <SignupInput
          name="nickname"
          onChange={handleChange}
          value={nickname}
          placeholder="닉네임을 입력해주세요"
        />
      </InputSectionWrapper>
      <SubmitButton value="가입하기" onClick={handleSubmit} />
    </>
  );
}
