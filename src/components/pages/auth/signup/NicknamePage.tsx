import { SignUpContext } from '@/context/SignUpContext';
import { useState, useContext } from 'react';

export default function NicknamePage({ onNext }: { onNext: () => void }) {
  const { setNicknameForm } = useContext(SignUpContext);
  const [nickname, setNickname] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleNext = () => {
    setNicknameForm({ nickname });
    onNext();
  };
  return (
    <div>
      <p>닉네임</p>
      <input
        name="nickname"
        type="text"
        onChange={handleChange}
        value={nickname}
      />
      <button onClick={handleNext}>다음</button>
    </div>
  );
}
