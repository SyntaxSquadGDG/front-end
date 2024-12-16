import type { Metadata } from 'next';
import '../../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import VerticalNavbar from '../../_components/navbars/vertical-navbar';
import HorizontalNavbar from '../../_components/navbars/horizontal-navbar';
import clsx from 'clsx';
import NextTopLoader from 'nextjs-toploader';
import { ModalProvider } from '../../_contexts/modal-provider';
import { Toaster } from 'react-hot-toast';
import { getLangDir } from 'rtl-detect';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  const locale = await getLocale();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body
        className={clsx(
          'overflow-x-hidden',
          'text-textDark',
          `${
            direction === 'ltr'
              ? 'pl-[calc(var(--verticalNavSmallWidth)+var(--navsBodySpacing))] lg:pl-[calc(var(--verticalNavWidth)+var(--navsBodySpacing))] pt-[calc(var(--horizontalNavHeight)+24px)] pb-[calc(var(--navsBodySpacing))] pr-[var(--navsBodySpacing)]'
              : 'pr-[calc(var(--verticalNavSmallWidth)+var(--navsBodySpacing))] lg:pr-[calc(var(--verticalNavWidth)+var(--navsBodySpacing))] pt-[calc(var(--horizontalNavHeight)+24px)] pb-[calc(var(--navsBodySpacing))] pl-[var(--navsBodySpacing)]'
          } `,
        )}>
        <NextTopLoader />
        <Toaster position="top-center" reverseOrder={false} />

        <NextIntlClientProvider messages={messages}>
          <VerticalNavbar />
          <HorizontalNavbar />
          <ModalProvider>
            <main className="relative z-50">{children}</main>
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

