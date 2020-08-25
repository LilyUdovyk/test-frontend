import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type UserAction = ActionType<typeof actions>

export interface UserState {
    readonly userData: UserData
    readonly error: string | null
}

export interface UserData {
    readonly id: string
    readonly name: string
    readonly email: string
    readonly picture: string
    readonly role: string
}

export interface CreateUserCreds {
    readonly name: string
    readonly email: string
    readonly picture: string
    readonly role: string
}