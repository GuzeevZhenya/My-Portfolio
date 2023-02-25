import React from 'react';
import style from './Project.module.css';

export const Project = (props) => {
  return (
    <div className={style.project}>
      <div className={style.projectImage}>
        <img />
        <button>Смотреть</button>
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
};
