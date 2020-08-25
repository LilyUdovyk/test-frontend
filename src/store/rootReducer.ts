import { combineReducers } from "redux";
import { EmptyAction, StateType } from "typesafe-actions";
import { connectRouter } from "connected-react-router";
import { history } from "../history";

import { UserAction } from "./user/types";
import userReducer from './user/reducers'
import { UsersAction } from "./users/types";
import usersReducer from './users/reducers'

const rootReducer = combineReducers({
    router: connectRouter(history),
    user: userReducer,
    users: usersReducer
})

export type IRootState = StateType<typeof rootReducer>
export type IRootAction = UserAction 
                        | UsersAction 
                        | EmptyAction<string>
export default rootReducer