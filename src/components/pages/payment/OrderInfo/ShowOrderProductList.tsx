import React, { useEffect, useState } from 'react';
import {
  CartOrderItemInfoType,
  ProductOutlineDataType,
  ShowOrderProductDataType,
} from '@/types/PaymentDataType';
import { getOutlineDataByProductCode } from '@/action/payment-service';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';

export default function ShowOrderProductList({
  orderLogInfo,
}: {
  orderLogInfo: Partial<CartOrderItemInfoType>[];
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
        const productInfoList: Partial<ProductOutlineDataType>[] =
          await Promise.all(
            orderLogInfo
              .filter((item) => !!item.productCode)
              .map(async (item) => {
                console.log('item.productCode', item.productCode);
                const outlineData = await getOutlineDataByProductCode(
                  item.productCode || ''
                );

                return {
                  productCode: item.productCode || '',
                  productName: outlineData.productName || '',
                  productPrice: outlineData.productPrice,
                  discountRate: outlineData.discountRate || 0,
                  quantity: item.quantity || 1,
                  thumbnailUrl: outlineData.thumbnailUrl || '',
                };
              })
          );
        console.log('productInfoList', productInfoList);
        setShowInfoList(productInfoList);
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
            className={cn(
              'size-7 transition-all',
              !isExpanded ? '' : 'rotate-180'
            )}
          />
        </button>
      </header>

      <div>
        {showInfoList.length >= 1 && (
          <>
            {!isExpanded && (
              <div className="relative py-2 flex items-center gap-4">
                <Image
                  src={showInfoList[0].thumbnailUrl || ''}
                  alt={showInfoList[0].productName || ''}
                  width={70}
                  height={70}
                  className="rounded-md"
                />
                <p className="text-xs">{showInfoList[0].productName}</p>
                <p className="absolute text-xs right-0 text-custom-green-300">
                  외 {showInfoList.length - 1}건
                </p>
              </div>
            )}
            {isExpanded && (
              <div className="py-2 space-y-2">
                {showInfoList.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Image
                      src={item.thumbnailUrl || ''}
                      alt={item.productName || ''}
                      width={70}
                      height={70}
                      className="rounded-sm"
                    />
                    <div className="text-xs space-y-0.5 ">
                      <p>{item.productName}</p>
                      <p>주문수량 : {item.quantity}개</p>
                      <p>가격*주문수량</p>
                    </div>
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
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
