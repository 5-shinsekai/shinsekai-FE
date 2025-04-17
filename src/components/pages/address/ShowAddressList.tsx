'use client';

import { DeleteAddressButton } from '@/components/ui/DeleteButtonComponent';
import { AddressDataType } from '@/types/AddressDataType';
import { useRouter } from 'next/navigation';

export default function ShowAddressList({
  myAddressList,
}: {
  myAddressList: AddressDataType[];
}) {
  const router = useRouter();

  const handleEdit = (item: Partial<AddressDataType>) => {
    const query = new URLSearchParams({
      addressUuid: item.addressUuid || '',
      // zipNo: item.zipNo || '',
      // addressNickname: item.addressNickname || '',
      // roadAddress: item.roadAddress || '',
      // detailAddress: item.detailAddress || '',
      // deliveryMemo: item.deliveryMemo || '',
      // firstPhoneNumber: item.firstPhoneNumber || '',
      // secondPhoneNumber: item.secondPhoneNumber || '',
      // receiverName: item.receiverName || '',
      // isMainAddress: String(item.isMainAddress || ''),
      // isPersonalMemo: String(item.isPersonalMemo || ''),
    });
    router.push(
      `/edit-address?${query.toString()}&isMain=${item.isMainAddress}`
    );
  };

  return (
    <section className="w-full mx-auto relative">
      {myAddressList.length === 0 && (
        <p>등록된 배송지가 없습니다. 배송지를 등록해주세요.</p>
      )}
      {myAddressList.length > 0 &&
        myAddressList.map((item) => (
          <div
            className="border-b py-4 last:border-none"
            key={item.addressUuid}
          >
            <div className="flex justify-between">
              <p className="text-sm font-semibold py-0.5 inline-flex items-center">
                {item.receiverName}({item.addressNickname})
                {item.isMainAddress && (
                  <span className="text-[0.6rem] font-light bg-custom-green-300/15 text-custom-green-300 px-[0.2rem] py-[0.1rem] mx-2">
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
                  <span className="px-3" onClick={() => handleEdit(item)}>
                    수정
                  </span>
                  <DeleteAddressButton addressUuid={item.addressUuid} />
                </nav>
              )}
            </div>
            <p className="text-sm">
              ({item.zipNo}){item.roadAddress}
            </p>

            <p className="text-sm leading-tight">{item.detailAddress}</p>
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
