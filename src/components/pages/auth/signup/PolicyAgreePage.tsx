import { Button } from './Button';
import { useState, useContext } from 'react';
import { SignUpContext } from '@/context/SignUpContext';

export default function PolicyAgreePage({ onNext }: { onNext: () => void }) {
  const { setFormData } = useContext(SignUpContext);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleNext = () => {
    setFormData({ input1, input2 });
    onNext();
  };

  return (
    <section className="items-center justify-center min-h-screen bg-gray-50">
      <section className="w-full space-y-4 pt-15 pb-10 px-7 tracking-tighter">
        <h1 className="text-3xl font-bold">
          고객님
          <br />
          환영합니다!
        </h1>
        <p className="text-md font-medium leading-normal text-[#717171]"></p>
      </section>
      <input
        type="text"
        name="input1"
        id="input1"
        className="border"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        name="input2"
        id="input2"
        className="border"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      <div className="w-full fixed bottom-0 pb-5 left-0 bg-white px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          onClick={handleNext}
          size="lg"
          className="
              w-full text-lg font-bold py-6
              group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
              group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
            "
        >
          다음
        </Button>
      </div>
    </section>
  );
}
