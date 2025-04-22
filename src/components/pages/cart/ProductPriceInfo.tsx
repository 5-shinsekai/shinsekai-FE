'use client';
import { updateCartItem } from '@/action/cart-service';
import ProductPrice from '@/components/commons/ProductPrice';
import CircleMinusIcon from '@/components/ui/icons/CircleMinusIcon';
import CirclePlusIcon from '@/components/ui/icons/CirclePlusIcon';
import { cn } from '@/lib/utils';
import { CartDataType } from '@/types/CartDataType';
import { ProductThumbnailType } from '@/types/ProductDataTypes';
import React from 'react';

export default function ProductPriceInfo({
  cartItem,
  product,
}: {
  cartItem: CartDataType;
  product: ProductThumbnailType;
}) {
  const handleQuantityChange = async (type: 'plus' | 'minus') => {
    const newQuantity =
      type === 'plus' ? cartItem.quantity + 1 : cartItem.quantity - 1;
    if (newQuantity > 0) {
      const res = await updateCartItem(
        cartItem.cartUuid,
        cartItem.productOptionListId,
        newQuantity
      );
      if (!res.isSuccess) {
        alert(res.message);
      }
    }
  };
  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-x-4">
        <CircleMinusIcon
          className={cn(
            'w-6 h-6 stroke-1 ',
            cartItem.quantity === 1
              ? 'stroke-custom-gray-300'
              : 'stroke-custom-gray-600 cursor-not-allowed'
          )}
          onClick={() => handleQuantityChange('minus')}
        />
        <p className="font-semibold">{cartItem.quantity}</p>
        <CirclePlusIcon
          className={cn('w-6 h-6 stroke-1 stroke-custom-gray-600')}
          onClick={() => handleQuantityChange('plus')}
        />
      </div>
      <ProductPrice
        price={product.productPrice}
        discountRate={product.discountRate}
        priceClassName={cn(
          ' text-end',
          product.discountRate === 0
            ? 'text-[13px] font-semibold'
            : 'text-[11px]'
        )}
        discountPriceClassName="font-semibold text-[13px] text-center"
        discountRateClassName="hidden"
      />
    </div>
  );
}
