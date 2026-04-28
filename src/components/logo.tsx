import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'font-headline text-xl font-black text-primary transition-colors hover:text-primary/80',
        className
      )}
    >
      Casei Barato
    </Link>
  );
}
