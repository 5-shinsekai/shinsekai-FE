'use client';

import { Checkbox } from '@/components/ui/Checkbox';
import RightArrowIcon from '../icons/RightArrowIcon';

interface AgreeCheckPropsType {
  content: string;
  optional?: boolean;
  children: React.ReactNode;
}

export default function AgreeCheck({ content, children }: AgreeCheckPropsType) {
  return (
    <div className="flex mt-[1.875rem] items-center">
      <div className="flex items-center space-x-2 flex-1">
        <Checkbox
          id="terms"
          className="border-custom-green-300 data-[state=checked]:border-custom-green-300  data-[state=checked]:bg-custom-green-300 size-[1.375rem] rounded-[0.2rem]"
        />
        <label
          id={content}
          htmlFor="terms"
          className="text-[0.875rem] text-custom-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {children}
        </label>
      </div>
      <RightArrowIcon className="size-[1.875rem]" />
    </div>
  );
}
