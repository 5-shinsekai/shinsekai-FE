import Link from 'next/link';
import { authMenuData } from '@/data/InitialData';

export default function AuthMenu() {
  return (
    <nav>
      <ul className="flex justify-center py-[30px] text-[12px]">
        {authMenuData.map((menu, index) => (
          <li key={menu.id} className="text-center">
            <Link href={menu.link} key={menu.id}>
              {menu.title}
            </Link>
            {index < authMenuData.length - 1 && (
              <span className="px-[10px] text-black">|</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
