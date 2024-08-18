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

const hiraganaList = ["あ","い","う","え","お",
  "か","き","く","け","こ",
  "さ","し","す","せ","そ",
  "た","ち","つ","て","と",
  "な","に","ぬ","ね","の",
  "は","ひ","ふ","へ","ほ",
  "ま","み","む","め","も",
  "や","ゆ","よ",
  "ら","り","る","れ","ろ",
  "わ","を","ん"]; // 简化的假名列表，实际可以扩展


export const hiraganaToRomaji: Record<string, string> = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  // 添加更多映射
};

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
    checkAnswer(state) {
      const romaji = hiraganaToRomaji[state.currentHiragana];
      if (state.input === romaji) {
        state.message = '正确';
      } else {
        state.message = '错误';
      }
    },
  },
});

export const { startGame, endGame, setInput, checkAnswer } = gameSlice.actions;
export default gameSlice.reducer;
