import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RankingIcon from '@/components/ui/icons/RankingIcon';
import Tag from '@/components/commons/Tag';
import ProductPrice from '@/components/commons/ProductPrice';
import { getProductThumbnail } from '@/action/product-service';
export default async function ProductListItem({
  productCode,
  size,
  rank,
}: Readonly<{ productCode: string; size: number; rank?: number }>) {
  const product = await getProductThumbnail(productCode);
  const validSrc =
    product.thumbnailUrl && product.thumbnailUrl.trim() !== ''
      ? product.thumbnailUrl
      : '/ImageLoading.png';

  return (
    <Link href={`/products/${productCode}`} className="shrink-0">
      <li
        className="mx-auto relative"
        style={{
          maxWidth: `${size / 16}rem`,
        }}
      >
        <Image
          src={validSrc}
          alt={product.productName}
          width={size}
          height={size}
          className="mx-auto"
        />
        <RankingIcon rank={rank} />
        <div className="h-6 flex gap-x-2 items-center">
          <Tag
            active={product.new}
            text="New"
            className="text-custom-green-100"
          />
          <Tag
            active={product.new}
            text="Best"
            className="text-custom-red-100"
          />
        </div>
        <p className=" text-[0.9375rem] font-medium">{product.productName}</p>
        <ProductPrice
          price={product.productPrice}
          discountRate={product.discountRate}
        />
      </li>
    </Link>
  );
}
