'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      <div className="flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
            <span className="hidden text-lg font-bold sm:inline-block">
              <span className="text-primary">Sardor</span>
              <span className="text-muted-foreground">Zokirjonov</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" className="hidden md:inline-flex" asChild>
              <Link href="#about">About me</Link>
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex" asChild>
              <Link href="#contact">Contact</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="mt-20 flex h-full flex-col items-end justify-center space-y-4 pr-10">
            <Button variant="ghost" asChild onClick={toggleMenu}>
              <Link href="#about">About me</Link>
            </Button>

            <Button variant="ghost" asChild onClick={toggleMenu}>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild onClick={toggleMenu}>
              <Link href="#contact">Contact</Link>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
