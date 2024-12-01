'use client';
import React from 'react';
import SectionItemSVG from '../svgs/sections/section-item';
import SettingsSVG from '../svgs/general/settings';
import clsx from 'clsx';
import { contentFont } from '@/app/_utils/fonts';
import { useTranslations } from 'next-intl';
import StackUsers from '../general/stack';

const SectionItem = () => {
  const t = useTranslations();
  const section = {
    name: 'Section Name',
    id: Math.random() * Math.random(),
    foldersCount: 20,
    employeesCount: 20,
    storage: 50,
  };

  return (
    <div
      className={clsx(
        contentFont.className,
        'p-[16px] rounded-[16px] border-[1px] border-solid border-blue3 flex flex-col gap-[45px]',
      )}>
      {/* Header */}
      <div className="flex justify-between items-center sm:flex-row flex-col">
        {/* Header Details */}
        <div className="flex gap-[16px] items-center sm:flex-row flex-col">
          <SectionItemSVG />

          <div className="flex flex-col gap-[8px]">
            <p className="text-textGray font-medium text-[14px] sm:text-start text-center">
              {section.foldersCount} folders
            </p>
            <p className="text-[18px] font-medium text-blue1">{section.name}</p>
          </div>
        </div>

        <div>
          <SettingsSVG />
        </div>
      </div>

      {/* Footer */}
      <div className="px-[16px] py-[10px] bg-cardColor flex justify-between gap-[24px] lg:gap-[48px] items-center rounded-[8px] sm:flex-row flex-col">
        {/* Storage */}
        <div className="flex flex-col gap-[20px] flex-grow sm:w-auto w-[100%]">
          <p className="text-[12px] text-blue1 font-medium sm:text-start text-center">
            {t('general.storage')}
          </p>
          <div className="bg-storageContainer h-[4px] w-[100%] rounded-full">
            <div
              className={clsx(
                `w-[${section.storage}%] bg-blue1 h-[100%] rounded-full`,
              )}></div>
          </div>
        </div>
        {/* Employees */}
        <div className="flex flex-col gap-[8px] items-center sm:text-start text-center">
          <p>{section.employeesCount} Employee</p>

          {/* Stacked Images */}
          <StackUsers employeesCount={section.employeesCount} />
        </div>
      </div>
    </div>
  );
};

export default SectionItem;
