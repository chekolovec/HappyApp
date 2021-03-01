import {takeEvery, put, takeLatest} from 'redux-saga/effects';

import {
  fetchListAction,
  fetchListActionError,
  fetchListActionSuccess,
} from '../actions';

function* fetchListSaga() {}

function* mainSaga() {
  yield takeLatest(fetchListAction, fetchListSaga);
}

export default mainSaga;
