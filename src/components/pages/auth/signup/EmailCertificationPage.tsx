import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function EmailCertificationPage({
  onNext,
}: {
  onNext: () => void;
}) {
  const { setemailForm } = useContext(SignUpContext);
  const [email, setEmail] = useState<string>(''); // 이메일 상태 관리

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // 입력값을 상태에 저장
    console.log('Email:', e.target.value);
  };

  const handleNext = () => {
    setemailForm({ email });
    onNext();
  };
  return (
    <section className="p-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        이메일
      </label>
      <input
        id="email"
        type="email"
        className="border-2 p-2 w-full mt-1"
        value={email}
        onChange={handleEmailChange} // onChange 이벤트 핸들러 추가
        placeholder="이메일을 입력하세요"
      />
      <button onClick={handleNext}>다음</button>
    </section>
  );
}
