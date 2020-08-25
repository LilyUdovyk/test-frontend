import { take, call, put, putResolve, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as actions from './actions'
import { createUser, retrieveUser, updateUser, deleteUser } from './utils'

export function* createUserSaga() {
  while (true) {
    const { payload } = yield take(actions.createUser.request)
    try {
      const user = yield call(createUser, payload.name, payload.email, payload.picture, payload.role)
      yield putResolve(actions.createUser.success(user))
      yield put(push('/users'))
    } catch (error) {
      yield put(actions.createUser.failure(error.message))
    }
  }
}

export function* retrieveUserSaga() {
  while (true) {
    const { payload } = yield take(actions.retrieveUser.request)
    console.log(payload)
    try {
      const userId = yield select(state => state.user.id)
      console.log('userId', userId)
      const user = yield call(retrieveUser, payload)
      console.log('user', user)
      yield putResolve(actions.retrieveUser.success(user))
      yield put(push(`/user-${payload}`))
    } catch (error) {
      yield put(actions.retrieveUser.failure(error.message))
    }
  }
}

export function* updateUserSaga() {
  while (true) {
    const { payload } = yield take(actions.updateUser.request)
    try {
        const updatedUserData = yield call(updateUser, payload.id, payload.name, payload.email, payload.picture, payload.role)
        const updatedUser = updatedUserData.data
        yield putResolve(actions.updateUser.success(updatedUser))
        yield put(push(`/user-${updatedUser.id}`))
    } catch (error) {
        yield put(actions.updateUser.failure(error.message))
    }
  }
}

export function* deleteUserSaga() {
  while (true) {
    const { payload } = yield take(actions.deleteUser.request)
    try {
        const deletedUser = yield call(deleteUser, payload)
        yield putResolve(actions.deleteUser.success(deletedUser))
        yield put(push('/users'))
    } catch (error) {
        yield put(actions.deleteUser.failure(error.message))
    }
  }
}