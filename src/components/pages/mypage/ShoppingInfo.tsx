import React from 'react';
import Link from 'next/link';
import { shoppingInfoData } from '@/data/MypageData';

export default function ShoppingInfo() {
  return (
    <section className=" bg-[#F5F5F5] py-[30px] px-[24px]">
      <nav>
        <h1 className="pt-[30px] pb-[20px]">쇼핑정보</h1>
        <ul>
          {shoppingInfoData.map((menu, index) => (
            <li key={menu.id} className="flex items-center">
              <menu.icon />
              <Link href={menu.link} key={menu.id}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
