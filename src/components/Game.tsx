import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import HiraganaDisplay from './HiraganaDisplay';
import InputBox from './InputBox';
import ControlButtons from './ControlButtons';
import { RootState } from '../store';
import { endGame, tickTimer } from '../store/gameSlice';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.game.isPlaying);
  const timer = useSelector((state: RootState) => state.game.timer);

  useEffect(() => {
    if (isPlaying && timer > 0) {
      const countdown = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0) {
      alert('你输啦！');
      dispatch(endGame());
    }
  }, [isPlaying, timer, dispatch]);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '10%' }}>
      <Typography variant="h4" align="center" gutterBottom>
        日语学习游戏
      </Typography>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>
        倒计时: {timer} 秒
      </Typography>
      <HiraganaDisplay />
      <InputBox />
      <ControlButtons />
    </Container>
  );
};

export default Game;
