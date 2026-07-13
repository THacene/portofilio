import '@/src/styles/globals.css';
import clsx from 'clsx';
import Header from '@/src/components/ui/Header';
import Footer from '@/src/components/ui/Footer';
import FlareCursor from '@/src/components/ui/FlareCursor';
import ProgressBar from '@/src/components/utils/progress';
import BackToTopButton from '@/src/components/utils/BackToTopButton';
import Head from './head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(
        'text-slate-800 bg-[#F8FAFF] transition ease'
      )}
    >
    <Head />

    <body className="bg-[#F8FAFF] transition ease min-h-screen relative overflow-x-hidden">
    <ProgressBar />
    <Header />

    <main className="flex flex-col justify-center items-center mx-auto">
      <FlareCursor />
      {children}
      <SpeedInsights />
      <Analytics />
    </main>
    <BackToTopButton />

    <Footer />
    </body>
    </html>
  );
};

export default RootLayout;
