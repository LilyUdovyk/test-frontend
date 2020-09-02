import { getType } from "typesafe-actions";

import { UsersState, UsersAction } from "./types";
import * as actions from "./actions";

const initialState: UsersState = {
    error: null,
    usersData: [],
    ignoreUsersData: [],
    ignoreUsersIds: []
}

export default (state: UsersState = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case getType(actions.retrieveUsers.success):
            return {
                ...state,
                error: null,
                usersData: action.payload
            }
        case getType(actions.retrieveUsers.failure):
            return {
                ...state,
                error: action.payload,
            }
        case getType(actions.updateIgnoreUsersList):
            return {
                ...state,
                error: null,
                ignoreUsersData: action.payload
            } 
        case getType(actions.saveIgnoreUsers.success):
            return {
                ...state,
                error: null,
                ignoreUsersIds: action.payload,
            }
        case getType(actions.saveIgnoreUsers.failure):
            return {
                ...state,
                error: action.payload,
            }  
        default:
            return state
    }
}
