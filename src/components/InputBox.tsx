import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { setInput, checkAnswer, startGame, hiraganaToRomaji  } from '../store/gameSlice';
import { RootState } from '../store';

const InputBox: React.FC = () => {
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => state.game.input);
  const currentHiragana = useSelector((state: RootState) => state.game.currentHiragana);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInput(value));
    dispatch(checkAnswer());
    
    const romaji = hiraganaToRomaji[currentHiragana];
    if (value === romaji) {
      setTimeout(() => {
        dispatch(startGame());
      }, 500); // 0.5秒后开始下一轮
    }
  };

  return (
    <TextField
      value={input}
      onChange={handleInputChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default InputBox;
