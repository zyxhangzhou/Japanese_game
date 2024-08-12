import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  currentHiragana: string;
  input: string;
  isPlaying: boolean;
  message: string;
}

const initialState: GameState = {
  currentHiragana: '',
  input: '',
  isPlaying: false,
  message: '',
};

const hiraganaList = ['あ', 'い', 'う', 'え', 'お']; // 简化的假名列表，实际可以扩展

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state) {
      const randomHiragana = hiraganaList[Math.floor(Math.random() * hiraganaList.length)];
      state.currentHiragana = randomHiragana;
      state.input = '';
      state.isPlaying = true;
      state.message = '';
    },
    endGame(state) {
      state.isPlaying = false;
      state.message = '游戏结束';
    },
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { startGame, endGame, setInput, setMessage } = gameSlice.actions;
export default gameSlice.reducer;
