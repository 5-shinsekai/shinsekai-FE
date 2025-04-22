import NextButton from '@/components/ui/NextButton';
import RadioInput from '@/components/ui/RadioInput';
import SignupInput from '@/components/ui/SignupInput';
import InputSectionWrapper from '@/components/ui/wrapper/InputSectionWrapper';
import SignupTitleWrapper from '@/components/ui/wrapper/SignupTitleWrapper';
import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function PersonalInfoPage({ onNext }: { onNext: () => void }) {
  const { setPersonalForm, setSteps } = useContext(SignUpContext);
  const [personalInfo, setPersonalInfo] = useState<{
    name: string;
    phone: string;
    gender: string;
    birth: string;
  }>({
    name: '',
    phone: '',
    gender: '',
    birth: '',
  });

  const formatPhoneNumber = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (onlyNumbers.length <= 3) return onlyNumbers;
    if (onlyNumbers.length <= 7)
      return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: name === 'phone' ? formatPhoneNumber(value) : value, // Apply formatting for phone
    }));
  };

  const handleNext = () => {
    setSteps((prev) => prev + 1);
    setPersonalForm(personalInfo);
    onNext();
  };

  return (
    <>
      <SignupTitleWrapper>회원 기본 정보를 입력해주세요.</SignupTitleWrapper>

      <InputSectionWrapper>
        <SignupInput
          name="name"
          onChange={handleChange}
          value={personalInfo.name}
          placeholder="이름"
        />
        <SignupInput
          type="date"
          name="birth"
          onChange={handleChange}
          value={personalInfo.birth}
          placeholder="생일"
          className="placeholder:text-custom-gray-400"
        />
        <RadioInput
          name="gender"
          comparer={personalInfo.gender}
          onChange={handleChange}
          values={['남성', '여성']}
        />

        <SignupInput
          name="phone"
          onChange={handleChange}
          value={personalInfo.phone}
          placeholder="전화번호(숫자만 입력해주세요)"
        />
      </InputSectionWrapper>
      <NextButton onClick={handleNext} />
    </>
  );
}
