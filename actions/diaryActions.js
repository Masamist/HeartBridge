import { getDailyPosts } from '../api/diary';
import { loadDiary } from '../redux/reducers/Diaries';

export const fetchDiaries = (familyId) => async (dispatch) => {
  try {
    const result = await getDailyPosts(familyId);
    if (result.status) {
      dispatch(loadDiary(result.data));
      console.log('diaryActions.js'+ result.data)
    } else {
      console.error('Error fetching diaries:', result.error);
    }
  } catch (error) {
    console.error(error);
  }
};