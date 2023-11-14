import { Action } from 'redux-act';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { servicesAPI } from '../../api';
import { getAllServices, getServiceById, setError, setLoading, setSelectedService, setServices } from '../actions';

function* getAllServicesSaga() {
  try {
    yield put(setError(false));
    yield put(setLoading(true));

    const { data } = yield call(servicesAPI.getAll);
    yield put(setServices(data));
  } catch (error) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

function* getServiceByIdSaga({ payload }: Action<string>) {
  try {
    yield put(setError(false));
    yield put(setLoading(true));

    const { data } = yield call(servicesAPI.getById, payload);
    yield put(setSelectedService(data));
  } catch (error) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchServices() {
  yield all([takeEvery(getAllServices, getAllServicesSaga), takeEvery(getServiceById, getServiceByIdSaga)]);
}