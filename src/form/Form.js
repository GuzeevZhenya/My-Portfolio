import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Form.module.css';

export const Form = () => {
  return (
    <div className={style.formBlock}>
      <div className={`${styleContainer.container} ${style.formContainer}`}>
        <h3>Контакты</h3>
        <form className={style.form}>
          <input />
          <input />
          <textarea />
        </form>
        <button className={style.button}>Отправить</button>
      </div>
    </div>
  );
};
