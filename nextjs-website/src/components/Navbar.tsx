"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 dark:border-white/15 bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Next.js Website
          </Link>
          <nav className="flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-foreground text-background"
                      : "hover:bg-black/5 dark:hover:bg-white/10")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}