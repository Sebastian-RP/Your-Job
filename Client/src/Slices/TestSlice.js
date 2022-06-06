import { createSlice } from "@reduxjs/toolkit";

export const skeletonSlice = createSlice({
  name: "skeleton", // sirve mas que nada para diferenciar las slices y stores entre ellas
  //esto es el estado inicial
  initialState: {
    age: 40,
    fizz: "buzz",
  },
  //acá esta el reducer y adentro las acciónes
  reducers: {
    incrementAge: (state) => {
      state.age += 1;
    },
    decrementAge: (state) => {
      state.age -= 1;
    },
    changeFizz: (state, action) => {
      state.fizz = action.payload;
    },
  },
});

export const { incrementAge, decrementAge, changeFizz } = skeletonSlice.actions;

export default skeletonSlice.reducer;
