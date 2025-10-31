import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDailyPosts } from '../../api/diary';

// import { Timestamp } from '@react-native-firebase/firestore';

const initialState = {
  items: [],  // start empty
  selectedDiary: null,
  selectedDiaryInformation: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// const initialState = {
//   items: [
//     {
//       id: 1,
//       userId: 1,
//       auther: 'Masami',
//       text: 'A kit containing all the essential school supplies, such as notebooks',
//       image: require('../../assets/images/camp.jpg'),
//       timestamp: '3:15',
//       notification: true,
//     },
//     {
//       id: 2,
//       userId: 2,
//       auther: 'Masami',
//       text: 'A kit containing all the essential school supplies, such as notebooks, pencils, and erasers, for underprivileged children to help them succeed in their education.',
//       image:
//         'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//       timestamp: '3:15',
//       notification: false,
//     },
//   ],
//   selectedDiary: null,
//   selectedDiaryInformation: {}
// };
// Async thunk to fetch diaries from Firebase
export const fetchDiaries = createAsyncThunk(
  'diaries/fetchDiaries',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getDailyPosts();
      if (result.status) return result.data; // success
      return rejectWithValue(result.error);   // fail
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const Diaries = createSlice({
  name: 'diaries',
  initialState,
  reducers: {
    resetDiaries: () => {
      return initialState;
    },
    loadDiary: (state, action) => {
    // Expecting action.payload to be an array of diary items
      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        console.warn('loadDiary expected an array, but got:', typeof action.payload);
      }
    },
    updateSelectedDiaryId: (state, action) => {
      state.selectedDiary = action.payload;
      //state.selectedDiaryInformation = state.items.find(item => item.diaryItemId === action.payload)
      state.selectedDiaryInformation = state.items.find(item => item.id === action.payload);
    }
  },
   extraReducers: (builder) => {
    builder
      .addCase(fetchDiaries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDiaries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDiaries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
})

export const { resetDiaries, updateSelectedDiaryId} = Diaries.actions;
export default Diaries.reducer