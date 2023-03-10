import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <div className={style.text}>
          <span>Hi there</span>
          <h2> I'm Guzeev Eugeny</h2>
          <p>A React Developer</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  );
};
