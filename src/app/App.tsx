import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>Меня зовут Иванова Екатерина</p>
          <p>Цели, которые хочу достичь: получить базовые знания во фронтенд-разработке</p>
          <p>Владею: C#, SQL, Javascript, CSS, HTML</p>
          <p>Опыт: Работаю 12 лет в Билайн. Начинала, как аналитик, параллельно училась в институте. Затем плавно перешла в разработчики.</p>
          <p>В основном писала код на C# и поддреживала БД в MS SQL.</p>
          <p>Сейчас команда переезжает на новый продукт, где нужна фронтенд-разработка. Решила попробовать новое</p>
      </header>
    </div>
  );
}

export default App;
