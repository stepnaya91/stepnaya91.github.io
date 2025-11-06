import { put, select, takeEvery } from 'redux-saga/effects';
import { tokenActions, tokenSelectors } from '../slices/token'
import { profileActions } from '../../store/slices/profile';
import { Profile } from "../../src/types/Profile";

export function* setProfile(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  const profile: Profile = token?{name:"ФИО",email:"test@test.ru",message:"message",preference:"offers"}:null;
  yield put(profileActions.set(profile));
}

export function* profileSaga() {
  yield takeEvery(tokenActions.gen.type, setProfile);
  yield takeEvery(tokenActions.empty.type, setProfile);
}
