import React from 'react';
import { seasons } from '@/data/DummyData/ProductDummyData';
import MainProductList from '@/components/pages/main/MainProductList';
import { seasonType } from '@/types/ProductDataTypes';
export default function MainProductsSection() {
  return (
    <section className="flex flex-col pb-20 pt-10 gap-y-[50px]">
      {seasons.map((season: seasonType) => (
        <MainProductList key={season.id} season={season} />
      ))}
    </section>
  );
}
