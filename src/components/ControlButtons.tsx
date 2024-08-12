import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';
import { startGame, endGame } from '../store/gameSlice';
import { RootState } from '../store';

const ControlButtons: React.FC = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.game.isPlaying);

  const handleStart = () => {
    dispatch(startGame());
  };

  const handlePause = () => {
    dispatch(endGame());
  };

  return (
    <Box mt={2}>
      {!isPlaying ? (
        <Button variant="contained" color="primary" onClick={handleStart}>
          开始游戏
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handlePause}>
          暂停游戏
        </Button>
      )}
    </Box>
  );
};

export default ControlButtons;
