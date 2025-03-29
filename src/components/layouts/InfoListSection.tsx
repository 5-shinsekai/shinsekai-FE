import React from "react";
import Link from "next/link";
import { infoSectionLayoutType} from "@/types/mypageDataType";

export default function InfoListSectionLayout({title, items, className = "",}: infoSectionLayoutType) {
    return (
        <section className="bg-[#F5F5F5] px-[24px] ${className}">
            <h1 className="text-[16px] font-semibold pt-[30px] pb-[20px]">
                {title}
            </h1>
            <nav>
                <ul className='flex flex-col justify-between gap-[28px]'>
                    {items.map((item) => (
                        <li key={item.id} className="flex items-center gap-2">
                            <item.icon/>
                            <Link href={item.link} key={item.id}>{item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}