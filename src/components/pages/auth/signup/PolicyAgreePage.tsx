import { Button } from '@/components/ui/button';
import { useState, useContext } from 'react';
import { SignUpContext } from '@/context/SignUpContext';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import { policyData } from '@/data/InitialData';

export default function PolicyAgreePage({ onNext }: { onNext: () => void }) {
  const { setPolicyCheckedForm } = useContext(SignUpContext);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    setCheckedIds((prev) =>
      isChecked ? [...prev, id] : prev.filter((checkedId) => checkedId !== id)
    );
  };

  const handleNext = () => {
    console.log('Checked IDs:', checkedIds); // 선택된 체크박스 ID 출력
    setPolicyCheckedForm({ checkedId: [...checkedIds] });
    onNext();
  };

  return (
    <section className="items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full space-y-4 pt-15 pb-10 px-7 tracking-tighter">
        <h1 className="text-3xl font-bold">
          고객님
          <br />
          환영합니다!
        </h1>
        <p className="text-md font-medium leading-normal text-[#717171]"></p>
      </div>

      {policyData.map((policy) => (
        <div key={policy.id} className="flex gap-x-2 items-center h-7">
          <CustomCheckbox
            name="checked_id"
            id={policy.id.toString()}
            value={policy.id}
            onChange={(isChecked: boolean) =>
              handleCheckboxChange(policy.id, isChecked)
            }
          />
          <label htmlFor={policy.id.toString()}>{policy.title}</label>
          <div>{policy.sub ? <div>hi</div> : ''}</div>
        </div>
      ))}
      <div className="w-full fixed bottom-0 pb-5 left-0 bg-white px-7 pt-5">
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
