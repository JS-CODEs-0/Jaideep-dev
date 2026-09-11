'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  index: string;
}

const navItems: NavItem[] = [
  { label: 'WORK', href: '#work', index: '01' },
  { label: 'ABOUT', href: '#about', index: '02' },
  { label: 'INDEX', href: '#index', index: '03' },
  { label: 'CONTACT', href: '#contact', index: '04' },
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-border-gothic'
          : 'bg-obsidian/80 backdrop-blur-sm border-b border-border-gothic/50'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between"
      >
        {/* Left: Identity Mark */}
        <Link
          href="/"
          className="flex items-center gap-3 text-bone hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
        >
          <span className="font-serif text-xl sm:text-2xl tracking-tight uppercase">
            JAIDEEP SINGH
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-stone tracking-widest uppercase border-l border-border-gothic pl-3">
            [SOFTWARE & AI ENGINEER]
          </span>
        </Link>

        {/* Right Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-mono text-xs text-parchment hover:text-bone transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent py-1"
            >
              <span className="text-olive">{item.index} {'//'}</span>
              <span className="tracking-wider">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden font-mono text-xs text-bone bg-charcoal border border-border-gothic px-3 py-1.5 hover:border-border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
        >
          {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-obsidian border-b border-border-gothic px-6 py-8 flex flex-col gap-6 shadow-2xl z-40">
          <div className="font-mono text-[10px] text-stone tracking-widest uppercase pb-2 border-b border-border-gothic">
            NAVIGATION INDEX {'//'} LOCATION: INDIA
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-mono text-sm text-bone hover:text-white flex items-center gap-3 py-2 border-b border-border-gothic/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
            >
              <span className="text-olive text-xs">{item.index} {'//'}</span>
              <span className="tracking-widest">{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
