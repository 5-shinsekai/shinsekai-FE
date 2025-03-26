import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'h-[50px] w-[334px] py-[12px] rounded-[50px]',
        hugButton: 'h-[36] min-w-[63] py-[6px] font-size-[15px]',
      },
      size: {
        default: 'h-[50px] w-[334px]',
        sm: 'h-[26px] w-[67px] py-[4px] font-size-[11px]',
        md: 'h-[44px] w-[166px] py-[13.5px] font-size-[14px]',
        lg: 'h-[50px] w-[334px] rounded-[12px] font-size-[14px]',
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
