import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from './skill/Skill';

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill
            title={'React'}
            description={'Loremergergergerger geer gerwgergwerg werg '}
          />
          <Skill
            title={'JS'}
            description={'Loremergergergerger geer gerwgergwerg werg '}
          />
          <Skill
            title={'HTML'}
            description={'Loremergergergerger geer gerwgergwerg werg '}
          />
        </div>
      </div>
    </div>
  );
};
