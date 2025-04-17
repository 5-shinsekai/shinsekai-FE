import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:ring-ring/50 focus-visible:ring-[0.1875rem] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default:
          'h-[2.625rem] w-[20.875rem] text-[0.875rem] rounded-[3.125rem]',
        xs: 'h-[1.7rem] px-3 text-[0.75rem] rounded-[1.25rem]',
        sm: 'h-[1.625rem] min-w-[4rem] text-[0.688rem] rounded-[3.125rem]',
        md: 'h-[2.75rem] w-[10.375rem] text-[0.875rem] rounded-[3.125rem]',
        lg: 'h-[3.125rem] w-[20.875rem] text-[0.875rem] rounded-3',
        hug: 'h-[2.25rem] min-w-[4rem] px-[1.0625rem] text-[0.938rem] rounded-[1.25rem]',
      },
      color: {
        default:
          'bg-white text-custom-green-200 border-[1px] border-custom-green-200',
        gray: 'bg-custom-gray-300 text-white',
        blue: 'bg-custom-blue-100 text-white',
        green: 'bg-custom-green-200 text-white',
        white: 'bg-white border-1',
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
      className={cn(buttonVariants({ variant, size, color }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
