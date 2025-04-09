'use client';

import RegisterStarbucksCardTerm from '@/components/pages/payment/RegisterStarbucksCardTerm';
import { Modal } from '@/components/ui/Modal';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <>
      <div className="relative rounded-md">
        <button
          title="button"
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="m-10 p-5 bg-slate-300 rounded-md hover:bg-slate-500"
        >
          모달 띄우기
        </button>
      </div>
      {isActive && (
        <Modal title="홈페이지 모달" setModal={() => setIsActive(!isActive)}>
          <RegisterStarbucksCardTerm />
        </Modal>
      )}
    </>
  );
}
