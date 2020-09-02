import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { UserData } from "../user/types"

export type UsersAction = ActionType<typeof actions>

export interface UsersState {
    readonly usersData: UserData[]
    readonly ignoreUsersData: UserData[]
    readonly ignoreUsersIds: string[]
    readonly error: string | null
}