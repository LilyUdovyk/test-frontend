import { take, call, put, putResolve, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as actions from './actions'
import { retrieveUsers, ignoreUsers } from './utils'

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

export function* ignoreUsersSaga() {
  while (true) {
    const { payload } = yield take(actions.ignoreUsers.request)
    try {
        const updatedUserData = yield call(ignoreUsers, payload)
        const updatedUser = updatedUserData.data
        yield putResolve(actions.ignoreUsers.success(updatedUser))
        yield put(push(`/user-${updatedUser.id}`))
    } catch (error) {
        yield put(actions.ignoreUsers.failure(error.message))
    }
  }
}