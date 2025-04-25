import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoBoxProps {
  title: string;
  content: string[] | ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function InfoBox({ title, content, className, icon }: InfoBoxProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm",
      className
    )}>
      <div className="flex items-center mb-3">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      
      {Array.isArray(content) ? (
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-gray-800 dark:text-gray-200 text-sm font-medium">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-800 dark:text-gray-200 text-sm">
          {content}
        </div>
      )}
    </div>
  );
}