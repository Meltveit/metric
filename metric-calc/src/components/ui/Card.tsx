import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  className?: string;
}

export function Card({ title, description, href, icon, className }: CardProps) {
  return (
    <Link href={href}>
      <div 
        className={cn(
          "converter-card bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-primary cursor-pointer dark:bg-gray-900 dark:border-gray-800",
          className
        )}
      >
        <div className="flex items-center mb-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
            {icon}
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </div>
    </Link>
  );
}