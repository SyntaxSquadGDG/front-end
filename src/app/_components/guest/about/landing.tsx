import React from 'react';
import HeadText from '../common/head';
import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';
import { contentFont } from '@app/_utils/fonts';
import OverlaySection from '../common/overlay-section';

const Landing = async () => {
  const t = await getTranslations();
  return (
    <section className={clsx('relative ')}>
      <OverlaySection
        className={'bg-[url("/images/patterns/wave.png")]'}
        fullSection={false}
      />
      <div
        className={clsx(
          'relative z-[5px] container mx-auto flex items-center justify-center flex-col text-center',
          'py-[240px] ',
        )}>
        <HeadText>{t('about.landing.head')}</HeadText>
        <p
          className={clsx(
            contentFont.className,
            'text-[30px] font-medium mt-[32px] text-textLight',
          )}>
          {t('about.landing.description')}
        </p>
      </div>
    </section>
  );
};

export default Landing;

