import React from 'react';
import { seasons } from '@/data/DummyData/ProductDummyData';
import MainProductList from '@/components/pages/main/MainProductList';
import { SeasonType } from '@/types/ProductDataTypes';
export default function MainProductsSection() {
  return (
    <section className="space-y-[3.125rem] pb-20 pt-10">
      {seasons.map((season: SeasonType) => (
        <div key={season.id}>
          <p className="px-6 mb-[1.875rem] text-2xl font-bold">
            {season.seasonName}
          </p>
          <MainProductList season={season} />
        </div>
      ))}
    </section>
  );
}
