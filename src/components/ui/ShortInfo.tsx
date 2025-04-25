import { cn } from '@/lib/utils';

export default function ShortInfo({
  title,
  content,
  className,
  size,
}: {
  title: string;
  content: string;
  className?: string;
  size?: string;
}) {
  return (
    <div className={cn('flex justify-between py-0.5', className)}>
      <p
        className={cn(
          'font-medium',
          'text-sm text-gray-800',
          size === 'md' && ' text-md',
          size === 'lg' && 'font-semibold text-lg',
          size === 'xl' && 'font-semibold text-[1.3rem]'
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-md',
          size === 'xl' && 'text-xl'
        )}
      >
        {content}
      </p>
    </div>
  );
}
