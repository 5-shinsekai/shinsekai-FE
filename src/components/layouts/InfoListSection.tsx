import React from 'react';
import Link from 'next/link';
import { InfoSectionLayoutType } from '@/types/MypageDataType';

export default function InfoListSectionLayout({
  title,
  items,
  className = '',
}: InfoSectionLayoutType) {
  return (
    <section className={`bg-custom-gray-100 px-[1.5rem] ${className}`}>
      <h1 className="text-4 font-semibold pt-[1.875rem] pb-[1.25rem]">
        {title}
      </h1>
      <nav>
        <ul className="flex flex-col justify-between gap-[1.75rem]">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <item.icon className="size-[30px]" />
              <Link href={item.link} key={item.id}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
