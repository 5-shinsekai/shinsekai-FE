import Link from 'next/link';
import React from 'react';

export default function AdressSelectSection() {
  return (
    <section className="bg-custom-gray-100 p-6 grid grid-cols-2">
      <p className="text-sm break-keep text-balance">
        등록된 배송지가 없습니다. 배송지를 등록해주세요.
      </p>
      <Link
        href="/register-address"
        className="text-sm text-stone-500 self-center justify-self-end text-nowrap"
      >
        배송지 등록
      </Link>
    </section>
  );
}
