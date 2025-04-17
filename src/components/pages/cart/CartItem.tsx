import CustomCheckbox from '@/components/ui/CustomCheckbox';
import { CartDataType } from '@/types/CartDataType';
import React from 'react';
import Image from 'next/image';
import { getProductThumbnail } from '@/action/product-service';

import CircleXIcon from '@/components/ui/icons/CircleXIcon';

import ProductPriceInfo from './ProductPriceInfo';
export default async function CartItem({
  CartItem,
}: {
  CartItem: CartDataType;
}) {
  const product = await getProductThumbnail(CartItem.productCode);

  return (
    <div className="flex gap-x-3 border-b border-gray-200 py-5 px-6">
      <CustomCheckbox
        id={CartItem.cartUuid}
        name={CartItem.cartUuid}
        checked={CartItem.checked}
      />
      <Image
        src={product.thumbnailUrl}
        alt={product.productName}
        width={80}
        height={80}
      />
      <div id="product_info" className="w-full space-y-3">
        <div className="flex justify-between items-center gap-x-7">
          <p className="text-xs font-semibold break-keep">
            {product.productName}
          </p>
          <CircleXIcon className="min-w-6 min-h-6 stroke-1 stroke-custom-gray-400" />
        </div>
        <ProductPriceInfo quantity={CartItem.quantity} product={product} />
      </div>
    </div>
  );
}
