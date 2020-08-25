import { createAsyncAction } from "typesafe-actions";
import { UserData } from "../user/types";


export const retrieveUsers = createAsyncAction(
    "users/RETRIEVE_USERS_REQUEST",
    "users/RETRIEVE_USERS_SUCCESS",
    "users/RETRIEVE_USERS_FAILURE"
)<void, UserData[], string>();
