import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  listMeetupSuccess,
  meetFailure,
  deleteMeetupSuccess,
  updateMeetupSuccess,
  createMeetupSuccess,
} from './actions';
import history from '~/services/history';
import api from '~/services/api';

export function* listMeetup() {
  try {
    const response = yield call(api.get, 'list');
    yield put(listMeetupSuccess(response.data));
  } catch (err) {
    yield put(meetFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const meetup = payload.data;
    const response = yield call(api.post, 'meetups', meetup);

    yield put(createMeetupSuccess(response.data));
    toast.success('Meetup atualizado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao criar meetup, verifique todos os campos!');
    yield put(meetFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, data } = payload;
    const response = yield call(api.put, `meetups/${id}`, data);
    yield put(updateMeetupSuccess(response.data));
    toast.success('Meetup atualizado com sucesso!');
    history.push(`/details/${id}`);
  } catch (err) {
    toast.error('Erro ao atualizar meetup, verifique todos os campos!');
    yield put(meetFailure());
  }
}

export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `meetups/${id}`);
    yield put(deleteMeetupSuccess(response.data));
    toast.success('Meetup excluido com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error(
      err.response.data.error || 'Ocorreu um erro inesperado, tente novamente.'
    );

    yield put(meetFailure());
  }
}

export default all([
  takeLatest('@meetup/LIST_REQUEST', listMeetup),
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_REQUEST', updateMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
]);
