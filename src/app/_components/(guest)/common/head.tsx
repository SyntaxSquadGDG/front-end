import { headFont } from '@app/_utils/fonts';
import clsx from 'clsx';
import React from 'react';

const HeadText = ({ children, variant = 'default' }) => {
  return (
    <h3
      className={clsx(
        headFont.className,
        `text-[48px] font-medium ${
          variant === 'default' ? 'linearGuestText' : 'text-textLight'
        }`,
      )}>
      {children}
    </h3>
  );
};

export default HeadText;
