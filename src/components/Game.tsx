import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import HiraganaDisplay from './HiraganaDisplay';
import InputBox from './InputBox';
import ControlButtons from './ControlButtons';
import { RootState } from '../store';
import { endGame } from '../store/gameSlice';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.game.isPlaying);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        dispatch(endGame());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying, dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        日语学习游戏
      </Typography>
      <HiraganaDisplay />
      <InputBox />
      <ControlButtons />
    </Container>
  );
};

export default Game;
