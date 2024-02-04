import Head from 'next/head';

import 'styles/global.css';
import 'animate.css';

import PageFooter from './page-footer';
import PageHeader from './page-header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Define style link or script you would like have for all pages here, for example, ga track */}
      </Head>
      <body className="flex flex-col relative">
        <PageHeader />
        <main className="flex-1" id="main">
          {children}
        </main>
        <PageFooter />
      </body>
    </html>
  );
}
