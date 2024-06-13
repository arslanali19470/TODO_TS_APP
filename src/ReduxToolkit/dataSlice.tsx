import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ReduxStateType = {
  array1: string[];
  removedItems: string[];
};

const initialState: ReduxStateType = {
  array1: [],
  removedItems: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    PushToArray: (state, action: PayloadAction<string>) => {
      state.array1.push(action.payload);
    },
    UpdateArrayItem: (
      state,
      action: PayloadAction<{oldItem: string; newItem: string}>,
    ) => {
      const {oldItem, newItem} = action.payload;
      const index = state.array1.findIndex(item => item === oldItem);
      if (index !== -1) {
        state.array1[index] = newItem;
      }
    },
    DeleteFromArray: (state, action: PayloadAction<string>) => {
      const item = action.payload;
      state.array1 = state.array1.filter(i => i !== item);
      state.removedItems.push(item);
    },
  },
});

export const {PushToArray, UpdateArrayItem, DeleteFromArray} =
  dataSlice.actions;

export default dataSlice.reducer;
