import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const onClickButton = () => {
    alert('hi띠');
  };
  return (
    <div className='App'>
      <Button variant={true} onClick={onClickButton}>
        마마
      </Button>
    </div>
  );
}

export default App;
