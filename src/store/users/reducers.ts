import { getType } from "typesafe-actions";

import { UsersState, UsersAction } from "./types";
import * as actions from "./actions";

const initialState: UsersState = {
    error: null,
    usersData: [],
    ignoreUsersIds: []
}

export default (state: UsersState = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case getType(actions.retrieveUsers.success):
            return {
                ...state,
                error: null,
                ignoreUsersIds: [],
                usersData: action.payload
            }
        case getType(actions.retrieveUsers.failure):
            return {
                ...state,
                error: action.payload,
            }  
        case getType(actions.ignoreUsers.success):
            return {
                ...state,
                error: null,
                ignoreUsersIds: action.payload,
            }
        case getType(actions.ignoreUsers.failure):
            return {
                ...state,
                error: action.payload,
            }  
        default:
            return state
    }
}
