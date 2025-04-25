import React from 'react';
import Link from 'next/link';
import { InfoSectionLayoutType } from '@/types/MypageDataType';
import { cn } from '@/lib/utils';

export default function InfoListSectionLayout({
  title,
  items,
  className = '',
}: InfoSectionLayoutType) {
  return (
    <section className={cn('bg-custom-gray-100 px-8', className)}>
      <h1 className="text-[1.1rem] font-semibold pt-6 pb-4">{title}</h1>
      <nav>
        <ul className="grid grid-cols-2 gap-5 px-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center bg-white rounded-2xl py-4 shadow-md"
            >
              <item.icon className="size-7.5" />
              <Link className="text-[1rem]" href={item.link} key={item.id}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
