'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/icons/CartIcon';
import { cn } from '@/lib/utils';

export default function ProductActionBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState('각인 옵션');
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const options = [
    { id: 1, color: 3, size: 2 },
    { id: 2, color: 4, size: 3 },
    { id: 3, color: 5, size: 4 },
    { id: 4, color: 5, size: 5 },
  ];

  // 중복되지 않은 color와 size 목록 생성
  const uniqueColors = Array.from(
    new Set(options.map((option) => option.color))
  );

  const handleColorChange = (colorId: number) => {
    setSelectedColor(colorId);
    // 선택된 color에 해당하는 size만 필터링
    const availableSizes = options
      .filter((option) => option.color === colorId)
      .map((option) => option.size);
    if (selectedSize !== null && !availableSizes.includes(selectedSize)) {
      setSelectedSize(null);
    }
  };

  const handleSizeChange = (sizeId: number) => {
    setSelectedSize(sizeId);
  };

  const handleCartClick = () => {
    if (isExpanded) {
      const selectedOption = options.find(
        (option) =>
          option.color === selectedColor && option.size === selectedSize
      );
      if (selectedOption) {
        console.log('장바구니 담기:', selectedOption);
      }
    } else {
      setIsExpanded(true);
    }
  };

  const handlePurchaseClick = () => {
    if (isExpanded) {
      const selectedOption = options.find(
        (option) =>
          option.color === selectedColor && option.size === selectedSize
      );
      if (selectedOption) {
        console.log('구매하기:', selectedOption);
      }
    } else {
      setIsExpanded(true);
    }
  };

  // 모든 옵션이 선택되었는지 확인
  const isAllOptionsSelected = selectedColor !== null && selectedSize !== null;

  return (
    <section className="rounded-t-3xl transition-all fixed bottom-0 w-full">
      <div
        className={cn(
          'bg-white rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out transform absolute bottom-28 w-full',
          isExpanded ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">옵션(필수)</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500"
            >
              ✕
            </button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                색상
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedColor || ''}
                onChange={(e) => handleColorChange(Number(e.target.value))}
              >
                <option value="">색상을 선택하세요</option>
                {uniqueColors.map((color) => (
                  <option key={color} value={color}>
                    색상 {color}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                사이즈
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedSize || ''}
                onChange={(e) => handleSizeChange(Number(e.target.value))}
                disabled={!selectedColor}
              >
                <option value="">사이즈를 선택하세요</option>
                {selectedColor &&
                  options
                    .filter((option) => option.color === selectedColor)
                    .map((option) => (
                      <option key={option.size} value={option.size}>
                        사이즈 {option.size}
                      </option>
                    ))}
              </select>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">총 금액</span>
              <span className="text-xl font-bold">0원</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'w-full bg-white h-28 relative z-10 transition-all duration-300 ease-in-out',
          isExpanded ? 'rounded-t-none' : 'rounded-t-3xl'
        )}
      >
        <div className="flex px-6 pt-4 justify-between">
          <CartIcon className="min-w-9 size-9 " />
          <Button
            size="md"
            color="green"
            className="w-5/6"
            onClick={handlePurchaseClick}
            disabled={isExpanded && !isAllOptionsSelected}
          >
            구매하기
          </Button>
        </div>
      </div>
    </section>
  );
}
