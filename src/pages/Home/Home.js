import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='centered-wrapper'>
      <h1>{t('welcome-to-river')}</h1>
      <p>{t('explore-scenic-beauty')}</p>
      <h1>{t('why-choose-our')}</h1>
      <p>{t('stability-comfort')}</p>
      <br />
      <p>{t('easy-to-use')}</p>
      <br />
      <p>{t('breathtaking-views')}</p>
      <br />
      <p>{t('flexible-rental')}</p>
      <br />
      <p>{t('safety-first')}</p>
      <h1>{t('plan-today')}</h1>
      <p>{t('ready-to-embark')}</p>
      <br />
      <p>{t('discover-beauty')}</p>
    </div>
  );
};
