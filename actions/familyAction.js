import { getFamilyMembers } from '../api/family';
import {loadFamilies} from '../redux/reducers/Families'

export const fetchFamilies = (familyId) => async (dispatch) =>{
  try {
    const result = await getFamilyMembers(familyId);
    if (result.status) {
      dispatch(loadFamilies(result.data));
      console.log('Family Members:', result.data)
    } else {
      console.error('Error fetching Family List:', result.error);
    }
  } catch (error) {
    console.error(error);
  }
}