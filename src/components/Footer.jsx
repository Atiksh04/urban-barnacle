import React from "react";
import FooterItem from "./FooterItem";

const FOOTER_NAV = [
  {
    label: 'Home',
    selected: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-2 2v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-7m0 0L3 12z" /></svg>
    ),
  },
  {
    label: 'Category',
    selected: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
    ),
  },
  {
    label: 'Look',
    selected: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    label: 'Account',
    selected: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.607 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[550px] bg-white border-t border-gray-200 z-50 block " style={{ height: '60px' }}>
      <nav className="flex justify-between items-center h-full">
        {FOOTER_NAV.map((item) => (
          <FooterItem key={item.label} icon={item.icon} label={item.label} selected={item.selected} />
        ))}
      </nav>
    </footer>
  );
} 