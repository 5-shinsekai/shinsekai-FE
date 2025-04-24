'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/icons/CartIcon';
import { cn } from '@/lib/utils';
import { ProductDetailType, ProductOptionType } from '@/types/ProductDataTypes';
import { getProductOption, getOptionName } from '@/action/product-service';
import OptionSelector from './OptionSelector';
import QuantitySelector from './QuantitySelector';
import { addCartItem } from '@/action/cart-service';
import Dialog from '@/components/commons/Dialog';
import { useRouter } from 'next/navigation';

export default function ProductActionBar({
  productDetail,
}: {
  productDetail: ProductDetailType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] =
    useState<ProductOptionType | null>(null);
  const [productOption, setProductOption] = useState<ProductOptionType[]>([]);
  const [colorNames, setColorNames] = useState<{ [key: number]: string }>({});
  const [sizeNames, setSizeNames] = useState<{ [key: number]: string }>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const route = useRouter();
  const basePrice =
    productDetail.productPrice * (1 - productDetail.discountRate / 100);

  useEffect(() => {
    const fetchProductOptions = async () => {
      const options = await Promise.all(
        productDetail.productOptionIds.map((productOptionId) =>
          getProductOption({ productOptionId })
        )
      );
      setProductOption(options);
    };

    fetchProductOptions();
  }, [productDetail.productOptionIds]);

  useEffect(() => {
    const fetchOptionNames = async () => {
      const colorPromises = Array.from(
        new Set(productOption.map((option) => option.colorId))
      ).map(async (colorId) => {
        const name = await getOptionName({
          optionType: 'color',
          optionId: colorId,
        });
        return { colorId, name: name.name };
      });

      const colorResults = await Promise.all(colorPromises);
      const colorNameMap = colorResults.reduce(
        (acc, { colorId, name }) => {
          acc[colorId] = name;
          return acc;
        },
        {} as { [key: number]: string }
      );
      setColorNames(colorNameMap);

      const allSizeIds = Array.from(
        new Set(productOption.map((option) => option.sizeId))
      );
      const sizePromises = allSizeIds.map(async (sizeId) => {
        const name = await getOptionName({
          optionId: sizeId,
          optionType: 'size',
        });
        return { sizeId, name: name.name };
      });

      const sizeResults = await Promise.all(sizePromises);
      const sizeNameMap = sizeResults.reduce(
        (acc, { sizeId, name }) => {
          acc[sizeId] = name;
          return acc;
        },
        {} as { [key: number]: string }
      );
      setSizeNames(sizeNameMap);
    };

    if (productOption.length > 0) {
      fetchOptionNames();
    }
  }, [productOption]);

  const handleColorChange = (colorId: number) => {
    setSelectedColor(colorId);
    setSelectedSize(null);
    setSelectedOption(null);
  };

  const handleSizeChange = (sizeId: number) => {
    setSelectedSize(sizeId);
    const option = productOption.find(
      (option) => option.colorId === selectedColor && option.sizeId === sizeId
    );
    if (option) {
      setSelectedOption(option);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= productDetail.userPurchaseLimit) {
      setQuantity(newQuantity);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSelectedColor(null);
    setSelectedSize(null);
    setQuantity(1);
    setSelectedOption(null);
  };

  const calculateTotalPrice = () => {
    if (selectedOption) {
      return (basePrice + selectedOption.optionPrice) * quantity;
    }
    return 0;
  };

  const handlePurchase = () => {
    if (isAllOptionsSelected) {
      route.push(
        `/payment?productCode=${productDetail.productCode}&productOptionId=${selectedOption?.id}&quantity=${quantity}&engravingMessage=""`
      );
      console.log(selectedOption);
    } else {
      setIsExpanded(true);
    }
  };

  const handleCart = async () => {
    if (isAllOptionsSelected) {
      const res = await addCartItem(
        productDetail.productCode,
        productDetail.frozen,
        quantity,
        selectedOption?.id.toString()
      );
      if (res.isSuccess) {
        alert('장바구니에 추가되었습니다.');
        console.log(res);
      } else {
        alert(res.message);
        console.log(res);
      }
    } else {
      setIsExpanded(true);
    }
  };
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
            <button onClick={handleClose} className="text-gray-500">
              ✕
            </button>
          </div>

          <OptionSelector
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            productOption={productOption}
            colorNames={colorNames}
            sizeNames={sizeNames}
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
          />

          {selectedOption && (
            <div className="mt-4">
              <QuantitySelector
                quantity={quantity}
                basePrice={basePrice}
                optionPrice={selectedOption.optionPrice}
                onQuantityChange={handleQuantityChange}
              />
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <span className="font-medium">총 금액</span>
            <span className="text-xl font-bold">
              {calculateTotalPrice().toLocaleString()}원
            </span>
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
          <CartIcon className="min-w-9 size-9" onClick={handleCart} />
          <Button
            size="md"
            color="green"
            className="w-5/6"
            onClick={handlePurchase}
            disabled={isExpanded && !isAllOptionsSelected}
          >
            구매하기
          </Button>
        </div>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={() =>
          route.push(
            '/login??callbackUrl=/products/' + productDetail.productCode
          )
        }
        title="구매하기"
        content="구매하시겠습니까?"
      />
    </section>
  );
}
