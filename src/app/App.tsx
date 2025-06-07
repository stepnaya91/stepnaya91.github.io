import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Меня зовут Иванова Екатерина</p>
          <p>Цели: получить базовые знания во фронтенд-разработке</p>
          <p>Технологии, которыми владею: C#, SQL, Javascript, CSS, HTML</p>
          <p>Опыт: Работаю 12 лет в Билайн. Начинала, как аналитик, параллельно училась в институте. Затем плавно перешла в разработчики. В основном писала код на C# и поддреживала БД в MS SQL.</p>
          <p>Последнее время занимаюсь разработкой BPM-процессов с помощью ProcessMaker, в котором используется php, javascript</p>
          <p>Сейчас команда переезжает на новый продукт, где нужна фронтенд-разработка. Решила попробовать новое</p>
        </p>
      </header>
    </div>
  );
}

export default App;
