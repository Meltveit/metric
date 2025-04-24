'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Volume & Mass', href: '/volume-mass' },
  { name: 'Length & Area', href: '/length-area' },
  { name: 'Temperature', href: '/temperature' },
  { name: 'Data Storage', href: '/data-storage' },
  { name: 'Density', href: '/density' },
  { name: 'Mixtures', href: '/mixtures' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm dark:bg-gray-900">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-1.5-14 0-.3-1.5-1.5-2-3-2"></path><path d="M3 7v12h18V7"></path><path d="M7 22v-3"></path><path d="M17 22v-3"></path><path d="M12 7v8"></path><path d="M9 11h6"></path></svg>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">MetricCalc</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-300"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}