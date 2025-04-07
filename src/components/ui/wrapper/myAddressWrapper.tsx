'use client';

import { myAddressListData } from '@/data/DummyData/myAddressDummyData';
import { myAddressListType } from '@/types/myAddressListType';
import { useRouter } from 'next/navigation';

export default function MyAddressWrapper() {
  //   const item = myAddressListData[0]; // 첫 번째 주소 객체
  const router = useRouter();

  const handleEdit = (item: myAddressListType) => {
    const query = new URLSearchParams({
      id: String(item.id),
      addressNickname: item.addressNickname,
      receiverName: item.receiverName,
      zipCode: item.zipCode,
      roadAddr: item.RoadAddress,
      detailedAddress: item.detailedAddress,
      firstPhoneNumber: item.firstPhoneNumber,
      secondPhoneNumber: item.secondPhoneNumber,
      deliveryMemo: item.deliveryMemo,
      defaultAddress: item.defaultAddress,
    });
    router.push(`/edit-address?${query.toString()}`);
  };

  return (
    <section className="w-full mx-auto">
      {myAddressListData.map((item) => (
        <div className="border-b py-4" key={item.id}>
          <div className="flex justify-between">
            <p className="text-sm font-semibold py-0.5">
              {item.receiverName}({item.addressNickname})
            </p>
            {item.defaultAddress ? (
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
            ({item.zipCode}){item.RoadAddress}
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
