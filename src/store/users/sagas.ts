import { take, call, put, putResolve, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as actions from './actions'
import { retrieveUsers } from './utils'

export function* retrieveUsersSaga() {
  while (true) {
    yield take(actions.retrieveUsers.request)
    try {
      const users = yield call(retrieveUsers)
      yield putResolve(actions.retrieveUsers.success(users))
    } catch (error) {
      yield put(actions.retrieveUsers.failure(error.message))
    }
  }
}