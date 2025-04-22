'use client';
import { updateCartItem } from '@/action/cart-service';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import { CartDataType } from '@/types/CartDataType';
import React from 'react';

export default function CartCheckbox({ cartItem }: { cartItem: CartDataType }) {
  const handleChecked = async () => {
    await updateCartItem(
      cartItem.cartUuid,
      cartItem.productOptionListId,
      cartItem.quantity,
      !cartItem.checked
    );
  };
  return (
    <div>
      <CustomCheckbox
        id={cartItem.cartUuid}
        name={cartItem.cartUuid}
        checked={cartItem.checked}
        onChange={handleChecked}
      />
    </div>
  );
}
