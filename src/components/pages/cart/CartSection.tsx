import CartList from './CartList';
import React from 'react';
import { CartDataType } from '@/types/CartDataType';
import EmptyCart from './EmptyCart';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import { cn } from '@/lib/utils';

export default function CartSection({
  ordinaryProducts,
  frozenProducts,
}: {
  ordinaryProducts: CartDataType[];
  frozenProducts: CartDataType[];
}) {
  const isEmpty = ordinaryProducts.length === 0 && frozenProducts.length === 0;
  const checkedAll =
    ordinaryProducts.every((item) => item.checked) &&
    frozenProducts.every((item) => item.checked);

  return (
    <section className="min-h-[60vh] relative">
      <EmptyCart className={`${isEmpty ? 'block' : 'hidden'}`} />

      <div className={cn(isEmpty ? 'hidden' : 'block')}>
        <div className="flex justify-between border-b border-gray-200 px-6 py-3">
          <div className="flex items-center gap-x-2">
            <CustomCheckbox
              id="checked-all"
              name="checked-all"
              checked={checkedAll}
            />
            <label htmlFor="checked-all">전체 선택</label>
          </div>
          <div className="text-xs flex items-center gap-x-1">
            <button>선택삭제</button>
            <span>|</span>
            <button>전체삭제</button>
          </div>
        </div>

        <CartList name="일반" cartItems={ordinaryProducts} />
        <CartList name="냉동" cartItems={frozenProducts} />
      </div>
    </section>
  );
}
