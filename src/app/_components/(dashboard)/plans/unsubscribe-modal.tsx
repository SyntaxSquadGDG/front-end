'use client';
import { useModal } from '@app/_contexts/modal-provider';
import { contentFont } from '@app/_utils/fonts';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Modal from '../modals/modal';
import Button from '../general/button';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { UnsubscribePlan } from './data/posts';
import ErrorAction from '../general/error-action';
import { revalidatePathAction } from '@app/actions';

const UnsubscribeModal = ({ plan }) => {
  const { modalStack, closeModal } = useModal();
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSuccessHandler() {
    toast.success(
      `${t('plans.unsubscribedSuccessfully')} ${t(`plans.${plan}`)} ${t(
        'general.successfully',
      )}`,
    );
    await revalidatePathAction('/plans');
    closeModal();
  }

  async function onClick() {
    const res = await UnsubscribePlan(
      { plan: plan },
      setIsLoading,
      setError,
      onSuccessHandler,
      toast,
      t,
    );

    console.log(res);
  }

  return (
    <Modal
      isOpen={modalStack.includes(`unsubscribePlans${plan}`)}
      onClose={closeModal}
      className={clsx(contentFont.className)}>
      <div className="text-center flex flex-col justify-center gap-[32px]">
        <div>
          <h2 className="text-[32px] font-medium">
            {t('plans.modals.unsubscribeHead')}
          </h2>
          <p className="text-[24px] ">
            {t('plans.modals.unsubscribeDescription')}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/plans/unsubscribe.png" alt="" />
        </div>
        <p className="text-[24px]">{t('plans.modals.unsubscribeSure')}</p>
        <div className="flex items-center gap-[24px] w-[100%]">
          <Button
            text={t('general.no')}
            onClick={() => closeModal()}
            className={'w-[100%]'}
            isPending={isLoading}
          />
          <Button
            variant="outline"
            text={t('general.yes')}
            className={'w-[100%]'}
            isPendingText={t('plans.modals.unsubscribing')}
            isPending={isLoading}
            onClick={() => onClick()}
          />
        </div>
        <ErrorAction>{error}</ErrorAction>
      </div>
    </Modal>
  );
};

export default UnsubscribeModal;

