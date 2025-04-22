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
          <div key={index} className="relative flex items-center gap-4">
            <Image
              src={item.thumbnailUrl}
              alt={item.productName}
              width={90}
              height={90}
              className="rounded-md"
            />
            <p>{item.productName}</p>
            <p className="absolute text-xs right-0 mr-4 text-custom-green-300">
              외 {showInfoList.length - 1}건
            </p>
            <input
              name={`orderList[${index}].productCode`}
              value={item.productCode}
              hidden
              readOnly
            />
            <input
              name={`orderList[${index}].productName`}
              value={item.productName}
              hidden
              readOnly
            />
            <input
              name={`orderList[${index}].quantity`}
              value={item.quantity}
              hidden
              readOnly
            />
            <input
              name={`orderList[${index}].productPrice`}
              value={item.productPrice}
              hidden
              readOnly
            />
          </div>
        ))}
      </div>
    )
  );
}
