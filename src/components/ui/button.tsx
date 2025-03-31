import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: 'h-[42px] w-[334px] py-[12px] text-[0.875rem] rounded-[50px]',
        sm: 'h-[26px] min-w-[63px] py-[4px] text-[0.688rem] rounded-[50px]',
        md: 'h-[44px] w-[166px] py-[13.5px] text-[0.875rem] rounded-[50px]',
        lg: 'h-[50px] w-[334px] py-[16.5px] text-[0.875rem] rounded-[12px]',
        hug: 'h-[36px] min-w-[63px] py-[6px] px-[17px] text-[0.938rem] rounded-[20px]',
      },
      color: {
        default: 'bg-[#FFFFFF] text-[#00A862] border-[1px] border-[#00A862]',
        gray: 'bg-[#E0E0E0] text-[#FFFFFF]',
        blue: 'bg-[#3182F6] text-[#FFFFFF]',
        green: 'bg-[#00A862] text-[#FFFFFF]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      color: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
