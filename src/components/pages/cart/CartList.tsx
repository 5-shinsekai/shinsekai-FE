import CustomCheckbox from '@/components/ui/CustomCheckbox';
import React from 'react';
import { CartDataType } from '@/types/CartDataType';
import { cn } from '@/lib/utils';
import CartItem from './CartItem';
import AllChecker from './AllChecker';
export default function CartList({
  name,
  cartItems,
}: {
  name: string;
  cartItems: CartDataType[];
}) {
  const cartItemLength = cartItems.length;
  const checked = cartItems.every((item) => item.checked);
  return (
    <div className={cn(cartItemLength ? 'block' : 'hidden')}>
      <div className="flex items-center gap-x-2 shadow-md py-3 px-6">
        <AllChecker id={name} name={name} checked={checked} />
        <label htmlFor={name}>{name} 선택</label>
      </div>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.productCode} cartItem={item} />
        ))}
      </div>
    </div>
  );
}
