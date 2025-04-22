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

export default function ShowOrderProductList({
  orderLogInfo,
  onTotalAmountChange,
}: {
  orderLogInfo: Partial<CartOrderItemInfoType>[];
  onTotalAmountChange?: (amount: number) => void;
}) {
  console.log('orderLogInfo', orderLogInfo);
  const [showInfoList, setShowInfoList] = useState<
    Partial<ShowOrderProductDataType>[]
  >([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log('orderLogInfo', orderLogInfo);

    const fetchProductsData = async () => {
      if (orderLogInfo.length >= 1) {
        const productInfoList: Partial<ShowOrderProductDataType>[] =
          await Promise.all(
            orderLogInfo
              .filter((item) => !!item.productCode)
              .map(async (item) => {
                console.log('item.productCode', item.productCode);
                const outlineData = await getOutlineDataByProductCode(
                  item.productCode || ''
                );

                const price = await getProductPrice?.({
                  productCode: item.productCode || '',
                  productOptionListId: item.productOptionListId || 0,
                });

                return {
                  productCode: item.productCode || '',
                  productName: outlineData.productName || '',
                  productPrice: outlineData.productPrice,
                  discountRate: outlineData.discountRate || 0,
                  quantity: item.quantity || 1,
                  productTotalPrice: price * (item.quantity || 0),
                  thumbnailUrl: outlineData.thumbnailUrl || '',
                };
              })
          );
        console.log('productInfoList', productInfoList);
        setShowInfoList(productInfoList);
        const total = productInfoList.reduce(
          (acc, cur) => acc + (cur.productTotalPrice || 0),
          0
        );
        onTotalAmountChange?.(total);
      }
    };
    fetchProductsData();
  }, [orderLogInfo]);
  console.log('showInfoList', showInfoList);

  return (
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

      {/* input은 항상 렌더링 */}
      {showInfoList.map((item, index) => (
        <div key={index}>
          <input
            name={`orderList[${index}].productCode`}
            value={item.productCode}
            hidden
            readOnly
          />
          <input
            name={`orderList[${index}].productName`}
            value={item.productName}
            hidden
            readOnly
          />
          <input
            name={`orderList[${index}].quantity`}
            value={item.quantity}
            hidden
            readOnly
          />
          <input
            name={`orderList[${index}].productPrice`}
            value={item.productPrice}
            hidden
            readOnly
          />
        </div>
      ))}
    </section>
  );
}
