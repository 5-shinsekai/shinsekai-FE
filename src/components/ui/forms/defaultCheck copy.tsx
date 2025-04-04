'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface AgreeCheckPropsType {
  id: string;
  optional?: boolean;
  children: React.ReactNode;
}

export default function DefaultCheck({ id, children }: AgreeCheckPropsType) {
  return (
    <div className="flex mt-[1.875rem] items-center">
      <div className="flex items-center space-x-2 flex-1">
        <Checkbox
          id="terms"
          className="border-custom-green-300 data-[state=checked]:border-custom-green-300  data-[state=checked]:bg-custom-green-300 size-[1.375rem] rounded-[0.2rem]"
        />
        <label
          id={id}
          htmlFor="terms"
          className="text-[0.875rem] text-custom-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {children}
        </label>
      </div>
    </div>
  );
}
