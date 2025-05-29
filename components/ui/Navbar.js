// components/Navbar.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from '../theme-btn';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">
            Sakshi's Blog
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-500 hover:font-bold">Home</Link>
          <Link href="/about" className="text-gray-500 hover:font-bold">About</Link>
          <Link href="/blog" className="text-gray-500 hover:font-bold">Blog</Link>
          <Link href="/contact" className="text-gray-500 hover:font-bold">Contact</Link>
          <div className='flex items-center'>
            <Button variant="outline" className="mx-1">Login</Button>
            <Button variant="outline" className="mx-1">Sign Up</Button>
            <ModeToggle className="backdrop-blur-none bg-background/100"/>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
          <span className='mx-4'>
            <ModeToggle className="backdrop-blur-none bg-background/100"/>
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
                      <Button variant="outline" className="mx-1 text-xs">Login</Button>
                      <Button variant="outline" className="mx-1 text-xs">Sign Up</Button>
                      
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
