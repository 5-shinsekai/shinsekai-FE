import { getCheckoutCartItemList } from '@/action/cart-service';
import { getProductPrice } from '@/action/product-service';
import { Button } from '@/components/ui/Button';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import Link from 'next/link';
import React from 'react';

export default async function PurchaseButtonSection() {
  const checkoutCartItemList = await getCheckoutCartItemList();
  const checkedOrdinaryList = checkoutCartItemList.ordinaryProducts;
  const checkedFrozenList = checkoutCartItemList.frozenProducts;
  const length = checkedOrdinaryList.length + checkedFrozenList.length;
  const ordinaryTotalPrice = await checkedOrdinaryList?.reduce(
    async (accPromise, curr) => {
      const acc = await accPromise;
      const price = await getProductPrice({
        productCode: curr.productCode,
        productOptionListId: curr.productOptionListId,
      });
      return acc + price * curr.quantity;
    },
    Promise.resolve(0)
  );
  const frozenTotalPrice = await checkedFrozenList?.reduce(
    async (accPromise, curr) => {
      const acc = await accPromise;
      const price = await getProductPrice({
        productCode: curr.productCode,
        productOptionListId: curr.productOptionListId,
      });
      return acc + price * curr.quantity;
    },
    Promise.resolve(0)
  );
  return (
    <section>
      <ButtonWrapper>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">총 {length}건</span>
          <span className="text-lg font-bold">
            {(ordinaryTotalPrice + frozenTotalPrice).toLocaleString()}원
          </span>
        </div>

        <div className="flex gap-2 justify-center">
          <Button
            size={'md'}
            className="border-custom-gray-300 text-custom-gray-300 font-semibold"
          >
            선물하기
          </Button>
          <Link href={'/payment'}>
            <Button size={'md'} color={'green'} disabled={length === 0}>
              구매하기
            </Button>
          </Link>
        </div>
      </ButtonWrapper>
    </section>
  );
}
