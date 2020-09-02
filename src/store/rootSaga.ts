import { all, spawn } from "redux-saga/effects";
import { retrieveUserSaga, createUserSaga, updateUserSaga, deleteUserSaga } from "./user/sagas";
import { retrieveUsersSaga, saveIgnoreUsersSaga, ignoreUserSaga } from "./users/sagas";

export default function* rootSaga() {
  yield all([
    spawn(retrieveUsersSaga),
    spawn(createUserSaga),
    spawn(retrieveUserSaga),
    spawn(updateUserSaga),
    spawn(deleteUserSaga),
    spawn(saveIgnoreUsersSaga),
    spawn(ignoreUserSaga),
  ]);
}