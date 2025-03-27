import React from 'react';
import { seasons } from '@/data/DummyData/ProductDummyData';
import ProductListArticle from '@/components/pages/main/ProductListArticle';
import { seasonType } from '@/types/ProductDataTypes';
export default function MainProductsSection() {
  return (
    <section className="flex flex-col pb-20 pt-10 gap-y-[50px]">
      {seasons.map((season: seasonType) => (
        <ProductListArticle key={season.id} season={season} />
      ))}
    </section>
  );
}
