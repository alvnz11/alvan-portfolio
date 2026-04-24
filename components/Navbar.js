"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-center gap-4 sm:gap-8 bg-white border border-gray-200 shadow-sm my-6 mx-auto px-8 py-4 rounded-full w-fit z-10">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
        
        return (
          <Link 
            key={link.href} 
            href={link.href}
            className={`px-4 py-2 rounded-lg transition-all font-medium text-sm sm:text-base ${
              isActive
                ? "bg-[#212529] text-white shadow-sm"
                : "text-[#212529] hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
