'use client';

import { AddressDataType } from '@/types/AddressDataType';
import { useRouter } from 'next/navigation';

export default function ShowAddressList({
  myAddressList,
}: {
  myAddressList: AddressDataType[];
}) {
  //   const item = myAddressListData[0]; // 첫 번째 주소 객체
  const router = useRouter();

  const handleEdit = (item: Partial<AddressDataType>) => {
    const query = new URLSearchParams({
      zipNo: item.zipNo || '',
      addressNickname: item.addressNickname || '',
      roadAddress: item.roadAddress || '',
      detailedAddress: item.detailedAddress || '',
      deliveryMemo: item.deliveryMemo || '',
      firstPhoneNumber: item.firstPhoneNumber || '',
      secondPhoneNumber: item.secondPhoneNumber || '',
      receiverName: item.receiverName || '',
      isMainAddress: String(item.isMainAddress || ''),
      isPersonalMemo: String(item.isPersonalMemo || ''),
    });
    router.push(`/edit-address?${query.toString()}`);
  };

  return (
    <section className="w-full mx-auto relative">
      {myAddressList.map((item) => (
        <div className="border-b py-4 last:border-none" key={item.addressUuid}>
          <div className="flex justify-between">
            <p className="text-sm font-semibold py-0.5">
              {item.receiverName}({item.addressNickname})
              {item.isMainAddress && (
                <span className="text-[0.6rem] font-light bg-custom-green-300/20 text-custom-green-300 px-1 py-0.8 mx-2">
                  기본
                </span>
              )}
            </p>
            {item.isMainAddress ? (
              <nav className="text-xs text-custom-gray-400">
                <span className="px-3" onClick={() => handleEdit(item)}>
                  수정
                </span>
              </nav>
            ) : (
              <nav className="text-xs text-custom-gray-400">
                <span className="px-3">수정</span>
                <span className="border-l px-3">삭제</span>
              </nav>
            )}
          </div>
          <p className="text-sm">
            ({item.zipNo}){item.roadAddress}
          </p>

          <p className="text-sm leading-tight">{item.detailedAddress}</p>
          {item.secondPhoneNumber ? (
            <p className="text-xs text-custom-gray-700 py-2">
              {item.firstPhoneNumber} | {item.secondPhoneNumber}
            </p>
          ) : (
            <p className="text-xs text-custom-gray-700">
              {item.firstPhoneNumber}
            </p>
          )}
          <p className="text-xs text-custom-gray-700">{item.deliveryMemo}</p>
        </div>
      ))}
    </section>
  );
}
