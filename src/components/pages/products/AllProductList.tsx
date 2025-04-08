'use client';
import React, { useRef, useEffect, useState } from 'react';
import ProductList from './ProductList';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
// import { getAllProductList } from '@/actions/product-service';
import { productType } from '@/types/ProductDataTypes';
import { cn } from '@/lib/utils';

export default function AllProductList({
  data,
}: {
  data: { data: productType[]; pages: number };
}) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState<productType[]>([]);
  const [totalPage, setTatalPage] = useState<number>(6);

  const changePage = React.useCallback(
    (page: number) => {
      if (totalPage && page >= totalPage) {
        return;
      }
      const query = new URLSearchParams(searchParams.toString());
      query.set('page', String(page + 1));
      const updatedQuery = query.toString();
      router.push(`/products?${updatedQuery}`, { scroll: false });
    },
    [router, searchParams]
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const page = Number(searchParams.get('page')) || 1;
  //     const data = await getAllProductList({ page });
  //     if (page === 1) {
  //       setProductData(data.data);
  //     } else {
  //       setProductData([...productData, ...data.data]);
  //     }

  //     setTatalPage(data.pages);
  //   };
  //   fetchData();
  // }, [searchParams]);

  useEffect(() => {
    setProductData((prev) => {
      setTatalPage(data.pages);
      if (prev.length === 0) {
        return data.data;
      } else {
        return [...prev, ...data.data];
      }
    });
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('load more');
        changePage(Number(searchParams.get('page')) || 1);
      }
    });
    const ref = loaderRef.current;
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [loaderRef, searchParams, changePage]);

  // 페이지 6일때 새로고침하면 1페이지로 이동
  // 이전데이터에 붙이는 방식이여서 유지하면 처음부터가아닌 중간페이지부터 나옴
  // 로직상으로는 페이지 유지, 전체데이터를 들고와야하나? (렌더링 시간은?)

  // useEffect(() => {
  //   const page = Number(searchParams.get('page')) || 1;
  //   if (page > 1) {
  //     const query = new URLSearchParams(searchParams.toString());
  //     query.set('page', '1');
  //     router.replace(`/products?${query.toString()}`);
  //   }
  // }, []);

  return (
    <div>
      <div
        className={cn(
          (Number(searchParams.get('page')) || 1) < totalPage
            ? 'block'
            : 'hidden'
        )}
        ref={loaderRef}
      >
        <LoadingIcon />
      </div>
      <ProductList data={productData} />
      {/* 마지막 페이지 여부 주기 */}
      {/* div 옵저버 높이 */}
      {/* 위치파악 ref */}
      {/* anker */}
      {/* 없을때 처리 */}
      <div
        className={cn(
          (Number(searchParams.get('page')) || 1) < totalPage
            ? 'block'
            : 'hidden'
        )}
        ref={loaderRef}
      >
        <LoadingIcon />
      </div>
    </div>
  );
}
