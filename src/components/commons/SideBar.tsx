'use client';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebarContext } from '@/context/SideBarContext';
import { getMainCategoryList } from '@/action/product-service';
import { MainCategoryType } from '@/types/CategoryTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useLoginSession } from '@/context/SessionContext';
import { signOut } from 'next-auth/react';

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const [mainCategoryList, setMainCategoryList] = useState<MainCategoryType[]>(
    []
  );
  const route = useRouter();
  const onClick = () => setIsOpen((prev) => !prev);
  const handleLogin = () => {
    setIsOpen(false);
    route.push('/login');
  };

  const isLogin = useLoginSession();
  console.log('isLogin!', isLogin);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchMainCategoryList = async () => {
      const mainCategoryList = await getMainCategoryList();
      setMainCategoryList(mainCategoryList);
    };
    fetchMainCategoryList();
  }, []);

  const handleRouteChange = (code: number) => {
    setIsOpen(false);
    route.push(`/products?mainCategoryCode=${code}`);
  };

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-[3000] w-full h-full transition-all overflow-hidden',
        'flex flex-col justify-between items-start',
        isOpen ? 'translate-x' : '-translate-x-full',
        'backdrop-filter backdrop-blur-xl -backdrop-hue-rotate=90 backdrop-opacity-95'
      )}
      onClick={onClick}
    >
      <div
        className="bg-white w-10/12 h-full px-6 py-5 overflow-y-scroll"
        style={{
          scrollbarWidth: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <header
          className="
        w-full
        h-10
        px-2
        z-[150]
        flex justify-end
        items-center
        "
        >
          <XIcon
            className="stroke-black stroke-1"
            size={32}
            onClick={onClick}
          />
        </header>

        <div className="space-y-2 py-5 border-b border-gray-200">
          <h1 className="font-bold text-2xl">
            {isLogin ? 'Welcome' : 'Sign in to Online Store'}
          </h1>
          <p className="text-sm">
            {isLogin ? (
              <>
                온라인 스토어에 오신 것을 환영합니다.
                <br />
                <button
                  className="text-sm text-custom-green-200 underline underline-offset-2"
                  onClick={() => {
                    signOut();
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-sm text-custom-green-200 underline underline-offset-2"
                  onClick={handleLogin}
                >
                  로그인
                </button>
                후 이용해보세요
              </>
            )}
          </p>
        </div>

        <Link
          href="/products"
          className="mt-7 block text-right"
          onClick={() => setIsOpen(false)}
        >
          전체 상품 보기 <span className="text-sm"> &gt;</span>
        </Link>
        <nav className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-5 items-center justify-items-center text-center gap-y-5">
          {mainCategoryList.map((category) => (
            <div
              key={category.code}
              onClick={() => handleRouteChange(category.code)}
              className=" space-y-2 "
            >
              <Image
                src={category.image}
                alt={category.imageAltText}
                width={100}
                height={100}
                className="rounded-full object-contain"
              />
              <label>{category.name}</label>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
