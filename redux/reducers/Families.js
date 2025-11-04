import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import { Timestamp } from '@react-native-firebase/firestore';

const initialState = {
  items: [],  // start empty
  selectedFamily: null,
  selectedFamilyInformation: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const Families = createSlice({
  name: 'families',
  initialState: {
    items: [],
  },
  reducers: {
    resetFamilies: () => {
      return initialState;
    },
    loadFamilies: (state, action) => {
    // Expecting action.payload to be an array of diary items
      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        console.warn('loadDiary expected an array, but got:', typeof action.payload);
      }
    },
    updateSelectedFamilyId: (state, action) => {
      state.selectedFamily = action.payload;
      //state.selectedDiaryInformation = state.items.find(item => item.diaryItemId === action.payload)
      state.selectedFamilyInformation = state.items.find(item => item.id === action.payload);
    }
  },
  //  extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchDiaries.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchDiaries.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchDiaries.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.payload || action.error.message;
  //     });
  // },
})

export const { resetFamilies, loadFamilies, updateSelectedFamilyId} = Families.actions;
export default Families.reducer