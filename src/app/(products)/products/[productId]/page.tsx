import React from 'react';
import ProductDetail from '@/components/pages/products/ProductDetail';
export default async function page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <main>
      <ProductDetail productId={productId} />
    </main>
  );
}
