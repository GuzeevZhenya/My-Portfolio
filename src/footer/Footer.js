import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={styleContainer.container}>
        <h2 className={style.title}>Гузеев Евгений</h2>
        <div className={style.socials}>
          <div className={style.icon}>1</div>
          <div className={style.icon}>2</div>
          <div className={style.icon}>3</div>
          <div className={style.icon}>4</div>
        </div>
        <p>2022 Все права защищеныы</p>
      </div>
    </div>
  );
};
