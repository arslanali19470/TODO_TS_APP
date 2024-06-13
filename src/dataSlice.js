// redux/dataSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// interface State {
//   array1: string[];
//   array2: string[];
//   CountNumber: number;
//   CountNumber2: number;
// }

const initialState = {
  array1: [],
  Myname:"Arslan"

};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    PushArray: (state, action) => {
      state.array1.push(action.payload);
    },
    ChangeName:(state,action)=>{
state.Myname=action.payload
// state.Myname="Ahmad"
    }
  },
});

export const { PushArray,ChangeName } = dataSlice.actions;

export default dataSlice.reducer;
