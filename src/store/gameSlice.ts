import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  currentHiragana: string;
  input: string;
  isPlaying: boolean;
  message: string;
  timer: number;  // 新增
}

const initialState: GameState = {
  currentHiragana: '',
  input: '',
  isPlaying: false,
  message: '',
  timer: 5,  // 初始化为5秒
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
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'nn',
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
      state.timer = 5; // 每次开始游戏重置为5秒
    },
    endGame(state) {
      state.isPlaying = false;
      state.message = '游戏结束';
    },
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    tickTimer(state) {
      state.timer -= 1; // 倒计时递减
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

export const { startGame, endGame, setInput, tickTimer, checkAnswer } = gameSlice.actions;
export default gameSlice.reducer;
