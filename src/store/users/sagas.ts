import { take, call, put, putResolve, select } from 'redux-saga/effects';

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

export function* ignoreUserSaga() {
  while (true) {
    const { payload } = yield take(actions.ignoreUser)

    const users = yield select(state => state.users.usersData)
    const index = users.indexOf(payload);
    users.splice(index, 1)
    yield putResolve(actions.retrieveUsers.success(users))

    const ignoredUsers = yield select(state => state.users.ignoreUsersData)
    const updatedIgnoreList = [...ignoredUsers, payload]
    yield put(actions.updateIgnoreUsersList(updatedIgnoreList))
  }
}

export function* saveIgnoreUsersSaga() {
  while (true) {
    const { payload } = yield take(actions.saveIgnoreUsers.request)
    try {
        const ignoredUsersData = yield call(ignoreUsers, payload)
        const ignoredUsers = ignoredUsersData.data
        yield putResolve(actions.saveIgnoreUsers.success(ignoredUsers))
    } catch (error) {
        yield put(actions.saveIgnoreUsers.failure(error.message))
    }
  }
}