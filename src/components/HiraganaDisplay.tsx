import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const HiraganaDisplay: React.FC = () => {
  const currentHiragana = useSelector((state: RootState) => state.game.currentHiragana);

  return <Typography variant="h2">{currentHiragana}</Typography>;
};

export default HiraganaDisplay;
