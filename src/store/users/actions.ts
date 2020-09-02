import { createAsyncAction, createAction } from "typesafe-actions";
import { UserData } from "../user/types";


export const retrieveUsers = createAsyncAction(
    "users/RETRIEVE_USERS_REQUEST",
    "users/RETRIEVE_USERS_SUCCESS",
    "users/RETRIEVE_USERS_FAILURE"
)<void, UserData[], string>();

export const ignoreUser = createAction(
    "users/IGNORE_USER", (user: UserData) => user
)();

export const updateIgnoreUsersList = createAction(
    "users/UPDATE_IGNORE_USERS_LIST", (ignoreUsers: UserData[]) => ignoreUsers
)();

export const saveIgnoreUsers = createAsyncAction(
    "users/IGNORE_USERS_REQUEST",
    "users/IGNORE_USERS_SUCCESS",
    "users/IGNORE_USERS_FAILURE"
)<string[], string[], string>();