import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Job.module.css';

export const Job = () => {
  return (
    <div className={style.job}>
      <div className={styleContainer.container}>
        <h3>Рассматриваю варианты работ</h3>
        <button>Нанять меня</button>
      </div>
    </div>
  );
};
