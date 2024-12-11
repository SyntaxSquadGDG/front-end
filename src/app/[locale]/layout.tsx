import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import VerticalNavbar from '../_components/navbars/vertical-navbar';
import HorizontalNavbar from '../_components/navbars/horizontal-navbar';
import clsx from 'clsx';
import NextTopLoader from 'nextjs-toploader';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { ModalProvider } from '../_contexts/modal-provider';
import { Toaster } from 'react-hot-toast';
import { getLangDir } from 'rtl-detect';
import GuestNavbar from '@app/_components/navbars/guest-navbar';
import OverlayImage from '@app/_components/general/overlay';
import Footer from '@app/_components/navbars/footer';
import { decodeJWT, decodeJwtFromCookie } from '@app/_utils/auth';

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
  let isAuth = false;
  // const allCookies = await cookies();

  // const isAuth = !!allCookies.get('token');
  // console.log(allCookies);

  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  if (token) {
    const decoded = decodeJWT(token.value);
    isAuth = decoded && !!decoded.payload;
  }

  const locale = await getLocale();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body
        className={clsx(
          'overflow-x-hidden',
          'text-textDark',
          isAuth &&
            `${
              direction === 'ltr'
                ? 'pl-[calc(var(--verticalNavSmallWidth)+var(--navsBodySpacing))] lg:pl-[calc(var(--verticalNavWidth)+var(--navsBodySpacing))] pt-[calc(var(--horizontalNavHeight)+24px)] pr-[var(--navsBodySpacing)]'
                : 'pr-[calc(var(--verticalNavSmallWidth)+var(--navsBodySpacing))] lg:pr-[calc(var(--verticalNavWidth)+var(--navsBodySpacing))] pt-[calc(var(--horizontalNavHeight)+24px)] pl-[var(--navsBodySpacing)]'
            } `,
          !isAuth &&
            'relative pt-[calc(var(--guestNavHeight))] bg-guestMainColor bg-fixed bg-cover bg-[url("/images/patterns/guest.png")]',
        )}>
        {!isAuth && (
          <div className="w-[100vw] h-[100%] bg-guestMainColor mix-blend-multiply absolute top-0 left-0" />
        )}
        {/* {!isAuth && <OverlayImage />} */}
        <NextTopLoader />
        <Toaster position="top-center" reverseOrder={false} />

        <NextIntlClientProvider messages={messages}>
          {isAuth && (
            <>
              <VerticalNavbar />
              <HorizontalNavbar />
            </>
          )}
          {!isAuth && <GuestNavbar />}
          <ModalProvider>
            <main className="relative z-50">
              {children}
              {!isAuth && <Footer />}
            </main>
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

