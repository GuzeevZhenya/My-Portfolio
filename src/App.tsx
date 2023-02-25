import React from 'react';
import {Header} from './header/Header';
import './App.css';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Footer} from './footer/Footer';
import {Form} from './form/Form';
import {Job} from './Job/Job';
import {Projects} from './projects/Projects';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Job />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
