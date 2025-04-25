import Link from 'next/link';
import React from 'react';
import { getAddress } from '@/action/address-service';

export default async function AdressSelectSection() {
  const address = await getAddress();
  const defaultAddress =
    address.find((addr) => addr.isMainAddress) || address[0];

  return (
    <section className="bg-custom-gray-100 p-6">
      {address.length === 0 ? (
        <div className="flex justify-between items-center">
          <p className="text-sm break-keep text-balance">
            등록된 배송지가 없습니다. 배송지를 등록해주세요.
          </p>
          <Link
            href="/register-address"
            className="text-sm text-stone-500 text-nowrap"
          >
            배송지 등록
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {defaultAddress && (
            <div className="text-sm text-gray-600 space-y-1">
              <p>받는 분: {defaultAddress.receiverName}</p>
              <p>
                주소: {defaultAddress.roadAddress}{' '}
                {defaultAddress.detailAddress}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
