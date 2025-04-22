'use server';
import React from 'react';
import AdressSelectSection from '@/components/pages/cart/AdressSelectSection';
import CartSection from '@/components/pages/cart/CartSection';
import PurchaseButtonSection from '@/components/pages/cart/PurchaseButtonSection';
import { getCartItem, getCartItemList } from '@/action/cart-service';

export default async function CartPage() {
  const cartItems = await getCartItemList();
  const ordinaryUuidList = cartItems.ordinaryProducts;
  const frozenUuidList = cartItems.frozenProducts;
  const ordinaryProductsPromises = ordinaryUuidList.map((item) =>
    getCartItem(item.cartUuid)
  );
  const frozenProductsPromises = frozenUuidList.map((item) =>
    getCartItem(item.cartUuid)
  );
  const ordinaryProducts = await Promise.all(ordinaryProductsPromises);
  const frozenProducts = await Promise.all(frozenProductsPromises);

  return (
    <main>
      <AdressSelectSection />
      <CartSection
        ordinaryProducts={ordinaryProducts}
        frozenProducts={frozenProducts}
      />
      <PurchaseButtonSection />
    </main>
  );
}
