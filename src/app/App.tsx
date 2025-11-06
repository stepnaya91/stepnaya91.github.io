import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { initSelectors } from '../../store/slices/init';

function App() {
  const init = useSelector(initSelectors.get);
  return (
    <>
      <p>{init?'Приложение запущено':''}</p>
    </>
  );
}

export default App;
