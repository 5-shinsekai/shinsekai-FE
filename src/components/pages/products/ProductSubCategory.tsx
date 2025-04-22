'use client';
import React, { useState } from 'react';
import MenuTab from '@/components/layouts/MenuTab';
import UpArrowIcon from '@/components/ui/icons/UpArrowIcon';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';
import { FilterDataType, CategoryDataType } from '@/types/ProductDataTypes';

export default function ProductSubCategory({
  subCategory,
  filter,
}: {
  subCategory: CategoryDataType[];
  filter: FilterDataType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const subCategories = [
    {
      key: 'subCategoryIds',
      label: '카테고리',
      data: subCategory,
      isMultiple: false,
    },
    {
      key: 'seasonIds',
      label: '시즌',
      data: filter.seasons,
      isMultiple: true,
    },
    {
      key: 'sizeIds',
      label: '사이즈',
      data: filter.sizes,
      isMultiple: true,
    },
    {
      key: 'colorIds',
      label: '색상',
      data: filter.colors,
      isMultiple: true,
    },
    {
      key: 'priceRangeId',
      label: '가격대',
      data: filter.priceRanges,
      isMultiple: false,
    },
  ].filter((item) => item.data.length > 0);

  if (subCategories.length === 0) return null;

  return (
    <div className="border-y-[1px] border-custom-gray-500">
      {subCategories
        .slice(
          0,
          isExpanded
            ? subCategories.length
            : Math.ceil(subCategories.length / 2)
        )
        .map((item, index) => (
          <div className="flex items-center border-b-2" key={index}>
            <p className="text-nowrap font-semibold px-5 border-r-2">
              {item.label}
            </p>
            <MenuTab
              key={index}
              keyname={item.key}
              category={item.data}
              isDefault={false}
              isMultiple={item.isMultiple}
            />
          </div>
        ))}

      <div
        className="text-center py-2 cursor-pointer font-semibold flex justify-center gap-x-1 items-center"
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <>
            접기
            <UpArrowIcon className="size-5 stroke-black" />
          </>
        ) : (
          <>
            더보기
            <DownArrowIcon className="size-5 stroke-black" />
          </>
        )}
      </div>
    </div>
  );
}
