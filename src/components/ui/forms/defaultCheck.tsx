'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface AgreeCheckPropsType {
  id: string;
  name: string;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  className?: string;
}

export default function DefaultCheck({
  id,
  children,
  name,
  onChange,
  className,
  defaultChecked = false,
}: AgreeCheckPropsType) {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2 flex-1">
        <Checkbox
          id={id}
          name={name}
          checked={defaultChecked}
          onCheckedChange={(checked) => {
            if (onChange) {
              onChange({
                target: {
                  name,
                  value: checked,
                },
              } as React.ChangeEvent<HTMLInputElement>);
            }
          }}
          className="border-custom-green-300 data-[state=checked]:border-custom-green-300  data-[state=checked]:bg-custom-green-300 size-[1.375rem] rounded-[0.2rem]"
        />
        <label
          id={id}
          htmlFor={id}
          className={cn(
            'text-[0.875rem] text-custom-gray-600 font-medium ',
            className
          )}
        >
          {children}
        </label>
      </div>
    </div>
  );
}
