'use server';
import React from 'react';
import AdressSelectSection from '@/components/pages/cart/AdressSelectSection';
import CartSection from '@/components/pages/cart/CartSection';
import PurchaseButtonSection from '@/components/pages/cart/PurchaseButtonSection';
import { getCartItems } from '@/action/cart-service';

export default async function CartPage() {
  const cartItems = await getCartItems();
  console.log(cartItems);

  return (
    <main>
      <AdressSelectSection />
      <CartSection data={cartItems.result} />
      <PurchaseButtonSection />
    </main>
  );
}
