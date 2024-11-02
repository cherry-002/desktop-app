import React, { useEffect } from 'react';
import initGame from './initGame';

const GameUi = () => {
  useEffect(() => {
    initGame();
  }, []); 

  return <canvas id="game" className=''></canvas>;
};

export default GameUi;
