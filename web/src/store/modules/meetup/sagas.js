import { takeLatest, call, put, all } from 'redux-saga/effects';
import { listSuccess, meetFailure } from './actions';
import api from '~/services/api';

export function* listMeetup() {
  try {
    const response = yield call(api.get, 'list');
    yield put(listSuccess(response.data));
  } catch (err) {
    yield put(meetFailure());
  }
}

export default all([takeLatest('@meetup/LIST_REQUEST', listMeetup)]);
