import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function PersonalInfoPage({ onNext }: { onNext: () => void }) {
  const { setPersonalForm } = useContext(SignUpContext);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`${name}:`, value);
  };

  const handleNext = () => {
    setPersonalForm(personalInfo);
    onNext();
  };

  return (
    <div>
      <p>이름</p>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={personalInfo.name}
      />
      <p>생일</p>
      <input
        name="birth"
        type="text"
        onChange={handleChange}
        value={personalInfo.birth}
      />
      <p>성별</p>
      <input
        name="gender"
        type="text"
        onChange={handleChange}
        value={personalInfo.gender}
      />
      <p>전화번호</p>
      <input
        name="phone"
        type="text"
        onChange={handleChange}
        value={personalInfo.phone}
      />
      <button onClick={handleNext}>다음</button>
    </div>
  );
}
