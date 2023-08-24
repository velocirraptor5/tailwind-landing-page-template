export const metadata = {
  title: 'Us - Simple',
  description: 'Page description',
};
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-wolfBg-900">
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
