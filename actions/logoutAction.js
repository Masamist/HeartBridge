import { logOut } from '../api/user';
import { resetToInitialState } from '../redux/reducers/User';

export const logout = async (dispatch) => {  
  
  await logOut()
  dispatch(resetToInitialState());
};