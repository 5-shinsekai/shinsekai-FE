import React from 'react';
import Image from 'next/image';
import { productType } from '@/types/ProductDataTypes';
import Link from 'next/link';
import RankingIcon from '@/components/ui/icons/RankingIcon';
import Tag from '@/components/commons/Tag';
import ProductPrice from '@/components/commons/ProductPrice';

export default function ProductListItem({
  product,
  size,
  rank,
}: Readonly<{ product: productType; size: number; rank?: number }>) {
  return (
    <Link href={`/products/${product.id}`} className="shrink-0">
      <li
        key={product.id}
        className="mx-auto relative"
        style={{
          maxWidth: `${size / 16}rem`,
        }}
      >
        <Image
          src={product.productImage}
          alt={product.title}
          width={size}
          height={size}
          className="mx-auto"
        />
        <RankingIcon rank={rank} />
        <div className="h-6 flex gap-x-2 items-center">
          <Tag
            active={product.isNew}
            text="New"
            className="text-custom-green-100"
          />
          <Tag
            active={product.isNew}
            text="Best"
            className="text-custom-red-100"
          />
        </div>
        <p className=" text-[0.9375rem] font-medium">{product.title}</p>
        <ProductPrice
          price={product.price}
          discountRate={product.discountRate}
        />
      </li>
    </Link>
  );
}
