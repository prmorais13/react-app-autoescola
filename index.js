import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const Button = ({ children }) => (
  <div>
    <button className="button">{children}</button>;
  </div>
);

ReactDOM.render(
  <div className="container">
    <h2>Serviços</h2>
    <hr />
    <Button>Aula Teórica</Button>
    <h2>Cadastros</h2>
    <hr />
    <Button>Alunos</Button>
  </div>,
  document.getElementById('root')
);
