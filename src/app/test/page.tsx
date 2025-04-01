// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[1.25rem_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Button color="gray" size="default">
//           등록하기
//         </Button>
//       </main>
//       <footer className="row-start-3 flex gap-[1.5rem] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

'use client';

import { Checkbox } from '@/components/ui/checkbox';

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        className="border-custom-green-300 size-[1.375rem] "
      />
      <label
        htmlFor="terms"
        className="text-[0.875rem] text-custom-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        배송지 정보 수집 및 이용동의 안내(필수)
      </label>
    </div>
  );
}
