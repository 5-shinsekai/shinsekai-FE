import React from 'react';
import Image from 'next/image';
import { getProductThumbnail } from '@/action/product-service';

import CircleXIcon from '@/components/ui/icons/CircleXIcon';

import ProductPriceInfo from './ProductPriceInfo';
import CartCheckbox from './CartCheckbox';
import { CartDataType } from '@/types/CartDataType';
export default async function CartItem({
  cartItem,
}: {
  cartItem: CartDataType;
}) {
  const product = await getProductThumbnail(cartItem.productCode);
  return (
    <div className="flex gap-x-3 border-b border-gray-200 py-5 px-6">
      <CartCheckbox cartItem={cartItem} />
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
          <CircleXIcon
            className="min-w-6 min-h-6 stroke-1 stroke-custom-gray-400"
            type="cart"
            cartUuid={cartItem.cartUuid}
          />
        </div>
        <ProductPriceInfo cartItem={cartItem} product={product} />
      </div>
    </div>
  );
}
