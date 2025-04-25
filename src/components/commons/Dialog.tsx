'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  dialogOption: {
    [key: string]: {
      title: string;
      content: string;
      confirmText?: string;
      cancelText?: string;
    };
  };
  dialogType: string;
}

export default function Dialog({
  dialogOption,
  dialogType,
  isOpen,
  onClose,
  onConfirm,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {dialogOption[dialogType].title}
        </h2>
        <p className="text-gray-600 mb-6  break-keep text-balance">
          {dialogOption[dialogType].content}
        </p>
        <div className="flex justify-center gap-2">
          <Button onClick={onClose} size="md">
            {dialogOption[dialogType].cancelText}
          </Button>
          <Button onClick={onConfirm} color="green" size="md">
            {dialogOption[dialogType].confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
