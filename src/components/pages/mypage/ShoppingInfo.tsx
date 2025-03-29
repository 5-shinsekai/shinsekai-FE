import React from 'react';
import Link from 'next/link';
import { shoppingInfoData } from '@/data/MypageData';

export default function ShoppingInfo() {
  return (
    <section className=" bg-[#F5F5F5] mt-[30px] px-[24px]">
      <nav>
        <h1 className="text-[16px] font-semibold pt-[30px] pb-[20px]">쇼핑정보</h1>
        <ul className='h-[248px] flex flex-col justify-between'>
          {shoppingInfoData.map((menu) => (
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
