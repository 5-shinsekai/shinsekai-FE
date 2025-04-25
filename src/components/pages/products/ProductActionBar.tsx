'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/icons/CartIcon';
import { cn } from '@/lib/utils';
import { ProductDetailType, ProductOptionType } from '@/types/ProductDataTypes';
import {
  getProductOption,
  getOptionName,
  reorderProduct,
} from '@/action/product-service';
import OptionSelector from './OptionSelector';
import QuantitySelector from './QuantitySelector';
import { addCartItem } from '@/action/cart-service';
import Dialog from '@/components/commons/Dialog';
import { useRouter } from 'next/navigation';
import { useLoginSession } from '@/context/SessionContext';
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
  const [dialogType, setDialogType] = useState<'reload' | 'cart' | 'login'>(
    'reload'
  );
  const isLoggedIn = useLoginSession();
  const route = useRouter();
  const basePrice =
    productDetail.productPrice * (1 - productDetail.discountRate / 100);

  const dialogOption = {
    reload: {
      title: '재입고 신청',
      content:
        '재입고 신청이 완료되었습니다. 알람 신청 페이지로 이동 하시겠습니까?',
      confirmText: '확인',
      cancelText: '취소',
      router: '/mypage/myalert',
    },
    cart: {
      title: '장바구니 추가',
      content: '장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?',
      confirmText: '확인',
      cancelText: '취소',
      router: '/cart',
    },
    login: {
      title: '로그인 필요',
      content:
        '로그인 후 이용하실 수 있습니다. 로그인 페이지로 이동하시겠습니까?',
      confirmText: '확인',
      cancelText: '취소',
      router: '/login?callbackUrl=/products/' + productDetail.productCode,
    },
  };
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
      if (selectedOption.stockCount === 0) {
        return 0;
      }
      return (basePrice + selectedOption.optionPrice) * quantity;
    }
    return 0;
  };

  const handleReorder = async () => {
    const res = await reorderProduct(selectedOption?.id.toString() ?? '', 30);
    setDialogType('reload');
    setIsDialogOpen(true);
  };

  const handlePurchase = () => {
    if (isAllOptionsSelected) {
      route.push(
        `/payment?productCode=${productDetail.productCode}&productOptionId=${selectedOption?.id}&quantity=${quantity}&engravingMessage=""`
      );
      console.log(selectedOption);
    } else {
      if (!isLoggedIn) {
        setIsDialogOpen(true);
      } else {
        setIsExpanded(true);
      }
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
        setDialogType('cart');
        setIsDialogOpen(true);
        console.log(res);
      } else {
        alert(res.message);
        console.log(res);
      }
    } else {
      if (!isLoggedIn) {
        setDialogType('login');
        setIsDialogOpen(true);
      } else {
        setIsExpanded(true);
      }
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
                stockCount={selectedOption.stockCount}
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
          {selectedOption?.stockCount === 0 ? (
            <Button
              size="md"
              color="green"
              className="w-5/6"
              onClick={handleReorder}
              disabled={isExpanded && !isAllOptionsSelected}
            >
              재입고 신청
            </Button>
          ) : (
            <Button
              size="md"
              color="green"
              className="w-5/6"
              onClick={handlePurchase}
              disabled={isExpanded && !isAllOptionsSelected}
            >
              구매하기
            </Button>
          )}
        </div>
      </div>

      <Dialog
        dialogOption={dialogOption}
        dialogType={dialogType}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={() => route.push(dialogOption[dialogType].router)}
      />
    </section>
  );
}
