'use client';

import React, { useEffect, useState } from 'react';

interface ModalProps {
  title?: string;
  setModal: () => void;
}

const Modal = ({ title, setModal }: ModalProps) => {
  const preventOffModal = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div id="모달 외부" onClick={setModal}>
      <div id="모달" onClick={preventOffModal}>
        <div>{title}</div>
        <div>모달 등장</div>
      </div>
    </div>
  );
};

export default function Page() {
  const [modal, setModal] = useState(false);
  const handle = () => {
    setModal(!modal);
  };

  return (
    <>
      <button title="modal-button" type="button" onClick={handle}>
        모달 띄우기
      </button>
      {modal && <Modal title="모달" setModal={handle} />}
    </>
  );
}
