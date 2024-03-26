import { createSlice, current } from "@reduxjs/toolkit";
const studentSlice = createSlice({
  name: "student",
  initialState: {
    stdInfo: {
      isNew: {},
      stdName: "",
      cardNumber: "",
      email: "",
      specialNumber: "",
      date: "",
      sum: "",
    },
    choices: [],
    stdSelection: [],
    imgRequired: {},
    availableCollages: {},
    stdQuery: {
      registerType: "",
      cityId: "",
      langId: "",
      specialNumber: "",
      sum: "",
    },
    loadingCollages: false,
    mofadalyId: "",
    reqState: {},
    stdAddmission: [],
  },
  reducers: {
    setChoices: (state, action) => {
      state.choices = action.payload;
    },
    getChoices: (state) => {
      const choicesDraft = state.choices;
      return choicesDraft;
    },
    setStdQuery: (state, action) => {
      state.stdQuery = action.payload;
    },
    getStdQuery: (state, action) => {
      const registerType = state.stdQuery;
      return registerType;
    },
    setstdInfo: (state, action) => {
      state.stdInfo = action.payload;
    },
    setstdSelection: (state, action) => {
      state.stdSelection = action.payload;
    },
    setImgRequired: (state, action) => {
      state.imgRequired = action.payload;
    },
    setMofadalyId: (state, action) => {
      state.mofadaly_id = action.payload;
    },
    setLoadingCollages: (state, action) => {
      state.loadingCollages = action.payload;
    },
    getstdInfo: (state, action) => {
      const registerType = state.stdInfo;
      return registerType;
    },
    setReqState: (state, action) => {
      state.reqState = action.payload;
    },
    setStdAddmission: (state, action) => {
      state.stdAddmission = action.payload;
    },
    setStdEmail: (state, action) => {
      state.stdInfo.email = action.payload;
    },
  },
});
export const {
  setStdEmail,
  setReqState,
  setStdAddmission,
  setChoices,
  getChoices,
  setStdQuery,
  getStdQuery,
  setstdInfo,
  getstdInfo,
  setstdSelection,
  setLoadingCollages,
  setImgRequired,
  setMofadalyId,
} = studentSlice.actions;

export default studentSlice.reducer;
