import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import HiraganaDisplay from './HiraganaDisplay';
import InputBox from './InputBox';
import ControlButtons from './ControlButtons';
import { RootState } from '../store';
import { endGame, tickTimer } from '../store/gameSlice';
import { FormattedMessage, useIntl } from 'react-intl';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.game.isPlaying);
  const timer = useSelector((state: RootState) => state.game.timer);
  const intl = useIntl();

  useEffect(() => {
    if (isPlaying && timer > 0) {
      const countdown = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0) {
      alert(intl.formatMessage({ id: 'game.over' }));
      dispatch(endGame());
    }
  }, [isPlaying, timer, dispatch]);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '10%' }}>
      <Typography variant="h4" align="center" gutterBottom>
        <FormattedMessage id="game.title" />
      </Typography>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>
        <FormattedMessage id="game.countdown" values={{ seconds: timer }} />
      </Typography>
      <HiraganaDisplay />
      <InputBox />
      <ControlButtons />
    </Container>
  );
};

export default Game;
