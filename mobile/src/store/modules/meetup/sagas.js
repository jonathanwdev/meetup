import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { listMeetupSuccess, meetFailure } from './actions';
import api from '~/services/api';

export function* listMeetup({ payload }) {
  const { date, page } = payload;
  try {
    const response = yield call(api.get, 'meetups', {
      params: { date, page },
    });
    yield put(listMeetupSuccess(response.data));
  } catch (err) {
    Alert.alert('Algo deu errado', 'Erro na atualização dos dados');
    yield put(meetFailure());
  }
}

export default all([takeLatest('@meetup/LIST_REQUEST', listMeetup)]);
