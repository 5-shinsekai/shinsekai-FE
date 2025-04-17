import CustomCheckbox from '@/components/ui/CustomCheckbox';
import React from 'react';
import { CartDataType } from '@/types/CartDataType';
import { cn } from '@/lib/utils';
import CartItem from './CartItem';
export default function CartList({
  name,
  cartItem,
}: {
  name: string;
  cartItem: CartDataType[];
}) {
  const cartItemLength = cartItem.length;
  const checked = cartItem.every((item) => item.checked);
  return (
    <div className={cn(cartItemLength ? 'block' : 'hidden')}>
      <div className="flex items-center gap-x-2 shadow-md py-3 px-6">
        <CustomCheckbox id={name} name={name} checked={checked} />
        <label htmlFor={name}>{name} 선택</label>
      </div>
      <div>
        {cartItem.map((item) => (
          <CartItem key={item.cartUuid} CartItem={item} />
        ))}
      </div>
    </div>
  );
}
