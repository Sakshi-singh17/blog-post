// components/Navbar.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Sun, Moon } from 'lucide-react';
import MagicBorderButton from "./MagicBorderButton";
import { useTheme } from "next-themes";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-100 bg-black-500 border-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full outline outline-white outline-1 mr-2" />
            <span className="text-lg font-bold text-gray-500 dark:text-white">Code. Learn. Conquer.</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-500 hover:font-bold">Home</Link>
          <Link href="/about" className="text-gray-500 hover:font-bold">About</Link>
          <Link href="/blog" className="text-gray-500 hover:font-bold">Blog</Link>
          <Link href="/contact" className="text-gray-500 hover:font-bold">Contact</Link>
          <div className='flex items-center'>
            {/* <MagicBorderButton className="mx-1">Login</MagicBorderButton>
            <MagicBorderButton className="mx-1">Sign Up</MagicBorderButton> */}
            <MagicBorderButton
              className="mx-1 w-10 h-10 p-0 flex items-center justify-center rounded-full relative"
              aria-label="Toggle dark mode"
              onClick={handleToggleTheme}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </MagicBorderButton>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <span className='mx-4'>
              <MagicBorderButton
                className="mx-1 w-10 h-10 p-0 flex items-center justify-center rounded-full relative"
                aria-label="Toggle dark mode"
                onClick={handleToggleTheme}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </MagicBorderButton>
            </span>
            <SheetTrigger className="text-black focus:outline-none">

              <Menu size={24} />

            </SheetTrigger>

            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Sakshi's Blog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    <div>
                      <MagicBorderButton className="mx-1 text-xs">Login</MagicBorderButton>
                      <MagicBorderButton className="mx-1 text-xs">Sign Up</MagicBorderButton>
                      <MagicBorderButton
                        className="mx-1 w-10 h-10 p-0 flex items-center justify-center rounded-full relative"
                        aria-label="Toggle dark mode"
                        onClick={handleToggleTheme}
                      >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </MagicBorderButton>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
