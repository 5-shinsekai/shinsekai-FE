'use client';
import React, { useRef, useEffect, useState } from 'react';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';
import { useSearchParams } from 'next/navigation';
import { ProductListType } from '@/types/ProductDataTypes';
import { cn } from '@/lib/utils';
import { getProductList } from '@/action/product-service';
import ProductList from './ProductList';
export default function AllProductList() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState<ProductListType>([]);
  const [isLast, setIsLast] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductList({
        params: searchParams.toString(),
        page: Number(searchParams.get('page')) || 1,
        size: 30,
      });
      setProductData(data.content);
      setIsLast(data.last);
    };
    fetchData();
  }, [searchParams]);

  return (
    <div>
      {/* 여기 살리기 */}
      <ProductList data={productData} />
      {/* 마지막 페이지 여부 주기 */}
      {/* div 옵저버 높이 */}
      {/* 위치파악 ref */}
      {/* anker */}
      {/* 없을때 처리 */}
      <div className={cn(isLast ? 'block' : 'hidden')} ref={loaderRef}>
        <LoadingIcon />
      </div>
    </div>
  );
}
