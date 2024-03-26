import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
  name: "root",
  initialState: {
    head: {
      title: "",
      symbol: "",
    },
    score: {
      a: 5,
      b: 0,
      c: 0,
      d: 0,
      ev: 0,
      f: 0,
      g: 0,
    },
    result: {
      res: null,
      name: "",
      src: "",
      data: [],
    },
  },
  reducers: {
    setTitle: (state, action) => {
      state.head.title = action.payload;
    },
    setSymbol: (state, action) => {
      state.head.symbol = action.payload;
    },
    setScoreA: (state, action) => {
      state.score.a = action.payload;
    },
    setScoreB: (state, action) => {
      state.score.b = action.payload;
    },
    setScoreC: (state, action) => {
      state.score.c = action.payload;
    },
    setScoreD: (state, action) => {
      state.score.d = action.payload;
    },
    setScoreE: (state, action) => {
      state.score.ev = action.payload;
    },
    setScoreF: (state, action) => {
      state.score.f = action.payload;
    },
    setScoreG: (state, action) => {
      state.score.g = action.payload;
    },
    setName: (state, action) => {
      state.result.name = action.payload;
    },
    setRes: (state, action) => {
      state.result.res = action.payload;
    },
    setSrc: (state, action) => {
      state.result.src = action.payload;
    },
    setData: (state, action) => {
      state.result.data = action.payload;
    },
  },
});
export const {
  setTitle,
  setSymbol,
  setScoreA,
  setScoreB,
  setScoreC,
  setScoreD,
  setScoreE,
  setScoreF,
  setScoreG,
  setName,
  setRes,
  setSrc,
  setData,
} = rootSlice.actions;
export default rootSlice.reducer;
