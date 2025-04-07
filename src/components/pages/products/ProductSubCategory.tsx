'use client';
import React, { useEffect, useState } from 'react';
import { getCategoryList } from '@/actions/product-service';
import { useSearchParams } from 'next/navigation';
import MenuTab from '@/components/layouts/MenuTab';
import UpArrowIcon from '@/components/ui/icons/UpArrowIcon';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';

export default function ProductSubCategory() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('highCategory') || '1';
  const [subCategory, setSubCategory] = useState<
    | {
        categoryId: string;
        categoryName: string;
        subCategory: {
          keyname: string;
          data: {
            code: number;
            name: string;
          }[];
        }[];
      }[]
    | undefined
  >();
  const [isExpanded, setIsExpanded] = useState(false); // 접기/펴기 상태 관리

  useEffect(() => {
    const fetchCategoryList = async () => {
      const res: {
        categoryId: string;
        categoryName: string;
        subCategory: {
          keyname: string;
          data: {
            code: number;
            name: string;
          }[];
        }[];
      }[] = await getCategoryList({
        categoryId: Math.min(Number(categoryId), 6).toString(),
      });
      setSubCategory(res);
    };

    fetchCategoryList();
  }, [categoryId]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border-y-[1px] border-custom-gray-500">
      {subCategory &&
        subCategory[0].subCategory
          .slice(
            0,
            isExpanded
              ? subCategory[0].subCategory.length
              : Math.ceil(subCategory[0].subCategory.length / 2)
          )
          .map((item, index) => (
            <div className="flex items-center border-b-2" key={index}>
              <p className="text-nowrap font-semibold px-5 border-r-2">
                {item.keyname}
              </p>
              <MenuTab
                key={index}
                data={item}
                isDefault={true}
                isMultiple={false}
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
            <UpArrowIcon className=" size-5 stroke-black" />
          </>
        ) : (
          <>
            필터 더보기
            <DownArrowIcon className=" size-5 stroke-black" />
          </>
        )}
      </div>
    </div>
  );
}
