import { all } from 'redux-saga/effects';
import { tokenSaga } from './tokenSaga';
import { profileSaga } from './profileSaga';


export function* sagas() {
  yield all([tokenSaga(),profileSaga()]);
}
