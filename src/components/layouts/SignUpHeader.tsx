import React from 'react';
import CloseIcon from '../ui/icons/CloseIcon';
import Link from 'next/link';

export default function SignUpHeader() {
  return (
    <Link
      href="/login"
      className="h-14 items-center w-full px-4 py-2 grid grid-cols-3"
    >
      <CloseIcon />
    </Link>
  );
}
