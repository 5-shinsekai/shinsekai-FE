'use client';

import React from 'react';
import ShowAddressList from '@/components/pages/address/ShowAddressList';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { getAddress } from '@/action/address-service';
import { Link } from 'lucide-react';

export default async function Page() {
  const router = useRouter();

  const addressListData = await getAddress();
  const sortedList = [...addressListData].sort((a) =>
    a.isMainAddress ? -1 : 1
  );

  return (
    <main className="px-5">
      <h1 className="py-10 text-[1.625rem] font-semibold">배송지 관리</h1>
      <div>
        <ShowAddressList myAddressList={sortedList} />
      </div>
      <div className="py-15"></div>
      <ButtonWrapper>
        <Link href="/register-address">
          <Button color="green" className="w-full">
            새 배송지 추가
          </Button>
        </Link>
      </ButtonWrapper>
    </main>
  );
}
