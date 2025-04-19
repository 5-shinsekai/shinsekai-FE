import { useState, useContext } from 'react';
import { SignUpContext } from '@/context/SignUpContext';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import { policyData } from '@/data/InitialData';
import Image from 'next/image';
import NextButton from '@/components/ui/NextButton';

export default function PolicyAgreePage({ onNext }: { onNext: () => void }) {
  const { setPolicyCheckedForm, setSteps } = useContext(SignUpContext);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const handleAllCheckbox = (isChecked: boolean) => {
    setCheckedIds([]);
    if (isChecked) {
      policyData.map((policy) => {
        setCheckedIds((prev) => [...prev, policy.id]);
      });
    }
  };
  const allChecked = checkedIds.length == policyData.length;

  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    setCheckedIds((prev) =>
      isChecked ? [...prev, id] : prev.filter((checkedId) => checkedId !== id)
    );
  };

  const handleNext = () => {
    setSteps((prev) => prev + 1);
    setPolicyCheckedForm({ checkedId: [...checkedIds] });
    onNext();
  };

  return (
    <>
      <section className="items-center px-7 mt-16 mb-10 space-y-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          alt="Welcome Image"
          width={62}
          height={62}
        />

        <h1 className="text-3xl font-bold text-pretty">
          고객님 <br /> 환영합니다!
        </h1>
      </section>

      <section id="checkboxs" className=" space-y-5 px-7">
        <div className="flex gap-x-2 h-11 border-b-2 border-custom-gray-200">
          <CustomCheckbox checked={allChecked} onChange={handleAllCheckbox} />
          <label htmlFor="all_checker"> 약관 전체동의 </label>
        </div>

        {policyData.map((policy) => (
          <div key={policy.id} className="flex gap-x-2 items-center mb-[30px]">
            <CustomCheckbox
              name="checked_id"
              checked={checkedIds.includes(policy.id)}
              id={policy.id.toString()}
              value={policy.id}
              required={policy.required}
              onChange={(isChecked: boolean) =>
                handleCheckboxChange(policy.id, isChecked)
              }
            />
            <label htmlFor={policy.id.toString()}>{policy.title}</label>
          </div>
        ))}
      </section>

      <NextButton onClick={handleNext} />
    </>
  );
}
