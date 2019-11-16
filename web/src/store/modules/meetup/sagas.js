import { takeLatest, call, put, all } from 'redux-saga/effects';
import { listSuccess, meetFailure, deleteSuccess } from './actions';
import history from '~/services/history';
import api from '~/services/api';

export function* listMeetup() {
  try {
    const response = yield call(api.get, 'list');
    yield put(listSuccess(response.data));
  } catch (err) {
    yield put(meetFailure());
  }
}
export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `/meetups/${id}`);
    history.push('/dashboard');
    yield put(deleteSuccess(response.data));
  } catch (err) {
    yield put(meetFailure());
  }
}

export default all([
  takeLatest('@meetup/LIST_REQUEST', listMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
]);
