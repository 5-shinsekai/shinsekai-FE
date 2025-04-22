import React from 'react';
import Image from 'next/image';
import { ShowOrderProductDataType } from './OrderLogInfoSection';

export default function ShowOrderProductList({
  showInfoList,
}: {
  showInfoList: ShowOrderProductDataType[];
}) {
  return (
    showInfoList.length >= 1 && (
      <div className="py-2">
        {showInfoList.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image
              src={item.thumbnailUrl}
              alt={item.productName}
              width={90}
              height={90}
              className="rounded-md"
            />
            <p>{item.productName}</p>
            <p className="fixed right-0 mr-10 text-custom-green-300">
              외 {showInfoList.length - 1}건
            </p>
            <input
              name={`orderList[${index}].productCode`}
              value={item.productCode}
              hidden
            />
            <input
              name={`orderList[${index}].productName`}
              value={item.productName}
              hidden
            />
            <input
              name={`orderList[${index}].quantity`}
              value={item.quantity}
              hidden
            />
            <input
              name={`orderList[${index}].productPrice`}
              value={item.productPrice}
              hidden
            />
          </div>
        ))}
      </div>
    )
  );
}
