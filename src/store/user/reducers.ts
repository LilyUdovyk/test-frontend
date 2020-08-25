import { getType } from "typesafe-actions";

import { UserState, UserAction } from "./types";
import * as actions from "./actions";

const initialState: UserState = {
    error: null,
    userData: {
        id: '',
        name: '',
        email: '',
        picture: '',
       role: ''
    }
}

export default (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case getType(actions.createUser.success):
            return {
                ...state,
                error: null,
                userData: action.payload
            }
        case getType(actions.createUser.failure):
            return {
                ...state,
                error: action.payload,
            }
        case getType(actions.retrieveUser.success):
            return {
                ...state,
                error: null,
                userData: action.payload
            }
        case getType(actions.retrieveUser.failure):
            return {
                ...state,
                error: action.payload,
            }  
        case getType(actions.updateUser.success):
            return {
                ...state,
                error: null,
                userData: action.payload
            }
        case getType(actions.updateUser.failure):
            return {
                ...state,
                error: action.payload,
            }  
        case getType(actions.deleteUser.success):
            return {
                ...state,
                error: null,
                userData: {
                    id: '',
                    name: '',
                    email: '',
                    picture: '',
                   role: ''
                }
            }
        case getType(actions.deleteUser.failure):
            return {
                ...state,
                error: action.payload,
            } 
        default:
            return state
    }
}
