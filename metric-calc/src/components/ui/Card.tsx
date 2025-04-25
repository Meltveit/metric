import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  iconColor: string;
  iconBgColor: string;
  className?: string;
}

export function ConverterCard({ 
  title, 
  description, 
  href, 
  icon, 
  iconColor, 
  iconBgColor,
  className 
}: CardProps) {
  return (
    <Link href={href}>
      <div 
        className={cn(
          "h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col",
          className
        )}
      >
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
            <div className={`${iconColor}`}>
              {icon}
            </div>
          </div>
          <h3 className="ml-3 text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-200 font-medium text-base flex-grow">
          {description}
        </p>
      </div>
    </Link>
  );
}