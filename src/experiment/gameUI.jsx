import React, { useEffect } from 'react';
import initGame from './initGame';

const GameUi = () => {
  useEffect(() => {
    initGame();
  }, []); 

  return <canvas id="game"></canvas>;
};

export default GameUi;
