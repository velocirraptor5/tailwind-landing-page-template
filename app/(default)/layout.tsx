'use client';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="bg-wolfBg-900">
      <Header mainPage={true} />

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
