'use client';
import React, { useEffect, useState, useRef } from 'react';
import { mainTabMenuData } from '@/data/InitialData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MainTabMenu() {
  const pathName = usePathname();

  const [activeMenuStyle, setActiveMenuStyle] = useState({ left: 0, width: 0 });
  const [isResizing, setIsResizing] = useState(false); // Transition 제어 상태

  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);

  const updateActiveMenuStyle = () => {
    const activeMenu = menuRefs.current.find(
      (el, index) => mainTabMenuData[index].link === pathName && el
    );

    if (activeMenu) {
      const { offsetLeft, offsetWidth } = activeMenu;
      setActiveMenuStyle({ left: offsetLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    updateActiveMenuStyle();
  }, [pathName]);

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true); // Transition 비활성화
      updateActiveMenuStyle();
      setTimeout(() => setIsResizing(false), 100); // Transition 활성화 (100ms 후)
    };
    // 리사이즈(해상도변화) 있을때 크기 변하게 설정
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathName]);

  return (
    <div>
      <ul className="grid grid-cols-4 h-14 items-center shadow-sm relative">
        {mainTabMenuData.map((menu, index) => (
          <Link href={menu.link} key={menu.id}>
            <li
              key={menu.id}
              ref={(el) => {
                menuRefs.current[index] = el; // 콜백 함수가 값을 반환하지 않도록 수정
              }}
              data-state={
                pathName.startsWith(menu.link) ? 'active' : 'inactive'
              }
              className={cn(
                'text-center font-normal cursor-pointer',
                'data-[state=active]:font-semibold'
              )}
            >
              {menu.title}
            </li>
          </Link>
        ))}
        <div
          className={cn(
            'absolute bottom-0 h-[3px] bg-[#00A862]',
            isResizing ? '' : 'transition-all duration-300'
          )}
          style={{ left: activeMenuStyle.left, width: activeMenuStyle.width }}
        ></div>
      </ul>
    </div>
  );
}
