"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "./logindialog";
import { Menu, X } from "lucide-react";

export function ClientNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-md flex items-center justify-between px-6 py-3"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-1 md:gap-3">
          <Image
            src="/logoicon.jpg"
            alt="Phleekz Logo"
            width={40}
            height={40}
          />
          <span className="text-black font-extrabold md:text-2xl">
            Phleekz For
          </span>
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-yellow-400 via-pink-500 to-purple-600 bg-clip-text font-bold text-lg md:text-2xl tracking-wide">
             Business
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => setShowLogin(true)}>
            Advertiser Login
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Slide-in Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white p-6 shadow-lg space-y-6">
            <button
              className="ml-auto mb-4 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => {
                setShowLogin(true);
                setMenuOpen(false);
              }}
            >
              Advertiser Login
            </Button>
            {/* Add more mobile nav links here if needed */}
          </div>
        </div>
      )}

      {/* Login Dialog */}
      <LoginDialog open={showLogin} onOpenChange={setShowLogin} />
    </>
  );
}

