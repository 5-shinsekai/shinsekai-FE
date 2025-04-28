import React, { useEffect, useState } from 'react';
import {
  CartOrderItemInfoType,
  ShowOrderProductDataType,
} from '@/types/PaymentDataType';
import { getOutlineDataByProductCode } from '@/action/payment-service';
import { cn } from '@/lib/utils';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';
import { getProductPrice } from '@/action/product-service';
import {
  ShowOrderLog,
  ExpandedShowOrderLog,
} from '@/components/ui/ShowOrderLog';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';

export default function ShowOrderProductList({
  orderLogInfo,
  onTotalAmountChange,
}: {
  orderLogInfo: Partial<CartOrderItemInfoType>[];
  onTotalAmountChange?: (amount: number) => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showInfoList, setShowInfoList] = useState<
    Partial<ShowOrderProductDataType>[]
  >([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const cartUuidList = orderLogInfo
    .filter((item) => !!item.cartUuid)
    .map((item) => item.cartUuid as string);

  useEffect(() => {
    const fetchProductsData = async () => {
      if (orderLogInfo.length >= 1) {
        const productInfoList: Partial<ShowOrderProductDataType>[] =
          await Promise.all(
            orderLogInfo
              .filter((item) => !!item.productCode)
              .map(async (item) => {
                const outlineData = await getOutlineDataByProductCode(
                  item.productCode || ''
                );
                const price = await getProductPrice?.({
                  productCode: item.productCode || '',
                  productOptionListId: item.productOptionListId || 0,
                });
                return {
                  productOptionId: item.productOptionListId ?? 0,
                  productCode: item.productCode ?? '',
                  productName: outlineData.productName ?? '',
                  productPrice: outlineData.productPrice ?? 0,
                  discountRate: outlineData.discountRate ?? 0,
                  quantity: item.quantity ?? 1,
                  productTotalPrice: price ? price * (item.quantity ?? 1) : 0,
                  productImageUrl: outlineData.thumbnailUrl ?? '',
                  productImageDescription: '',
                };
              })
          );
        setShowInfoList(productInfoList);

        const total = productInfoList.reduce(
          (acc, cur) => acc + (cur.productTotalPrice || 0),
          0
        );
        onTotalAmountChange?.(total);
        setIsLoading(false);
      }
    };
    fetchProductsData();
  }, [orderLogInfo]);

  return isLoading ? (
    <section className="w-full flex items-center justify-center animate-pulse">
      <LoadingIcon otherContent="주문 정보를 불러오는 중입니다..." />
    </section>
  ) : (
    <section className="px-6">
      <header className="relative flex items-center">
        <h1 className="font-semibold text-[1.125rem] py-2">주문내역</h1>
        <p className="before:content-['|'] before:mr-2 px-2 text-xs text-custom-gray-700">
          배송지 1곳 / 상품
          {showInfoList.reduce((acc, cur) => acc + (cur.quantity || 0), 0)}개
        </p>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="absolute right-0"
        >
          <DownArrowIcon
            className={cn('size-7 transition-all', isExpanded && 'rotate-180')}
          />
        </button>
      </header>

      {!isExpanded && showInfoList[0] && (
        <ShowOrderLog
          productInfoList={showInfoList[0]}
          orderListCount={showInfoList.length - 1}
        />
      )}

      {isExpanded && (
        <div className="py-2 space-y-2">
          {showInfoList.map((item, index) => (
            <div key={index}>
              <ExpandedShowOrderLog productInfoList={item} />
            </div>
          ))}
        </div>
      )}

      {!isLoading && showInfoList.length > 0 && (
        <>
          <input
            type="hidden"
            name="cartUuidList"
            value={JSON.stringify(cartUuidList)}
            readOnly
          />
          <input
            type="hidden"
            name="orderProductList"
            value={JSON.stringify(showInfoList)}
            readOnly
          />
        </>
      )}
    </section>
  );
}
