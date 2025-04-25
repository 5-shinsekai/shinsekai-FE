import React from 'react';
import {
  getProductOption,
  getProductThumbnail,
  getSize,
  getColor,
} from '@/action/product-service';
import Link from 'next/link';
import Image from 'next/image';
export default async function AlertCard({
  productionOptionId,
  validUntil,
}: {
  productionOptionId: number;
  validUntil: string;
}) {
  const productData = await getProductOption({
    productOptionId: productionOptionId,
  });
  const thumbnail = await getProductThumbnail(productData.productCode);
  const size = await getSize(productData.sizeId);
  const color = await getColor(productData.colorId);
  return (
    <Link href={`/products/${productData.productCode}`}>
      <div className="flex items-center p-4 border rounded-lg mb-4 shadow-sm">
        <div className="w-20 h-20 mr-4">
          <Image
            src={thumbnail.thumbnailUrl}
            alt={thumbnail.productName}
            className="w-full h-full object-cover rounded"
            width={80}
            height={80}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{thumbnail.productName}</h3>
          <p>
            알람 설정 옵션 : {size.name} | {color.name}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            마감일: {validUntil.slice(0, 10)}일
          </p>
        </div>
      </div>
    </Link>
  );
}
