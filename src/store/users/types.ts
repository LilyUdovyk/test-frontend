import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { UserData } from "../user/types"

export type UsersAction = ActionType<typeof actions>

export interface UsersState {
    readonly usersData: UserData[]
    readonly ignoreUsersIds: UserData[]
    readonly error: string | null
}