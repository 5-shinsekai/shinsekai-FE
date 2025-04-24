import React from 'react';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';
import { cn } from '@/lib/utils';
import { getProductList } from '@/action/product-service';
import ProductList from './ProductList';
export default async function AllProductList({
  searchParam,
}: {
  searchParam: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const data = await getProductList({
    searchParam,
    size: 30,
  });
  console.log(data);
  return (
    <div>
      <ProductList data={data.content} />
      {/* 마지막 페이지 여부 주기 */}
      {/* div 옵저버 높이 */}
      {/* 위치파악 ref */}
      {/* anker */}
      {/* 없을때 처리 */}
      <div className={cn(data.last ? 'hidden' : 'block')}>
        <LoadingIcon />
      </div>
    </div>
  );
}
