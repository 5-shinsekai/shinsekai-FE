import React from 'react';
import CloseIcon from '../ui/icons/CloseIcon';

export default function SignUpHeader() {
  return (
    <nav className="h-14 items-center w-full px-4 py-2 grid grid-cols-3">
      <CloseIcon />
    </nav>
  );
}
