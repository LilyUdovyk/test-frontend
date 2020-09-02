import { createAsyncAction, createAction } from "typesafe-actions";
import { UserData, CreateUserCreds } from "../user/types";

export const createUser = createAsyncAction(
    "user/CREATE_USER_REQUEST",
    "user/CREATE_USER_SUCCESS",
    "user/CREATE_USER_FAILURE"
)<CreateUserCreds, UserData, string>();

export const retrieveUser = createAsyncAction(
    "user/RETRIEVE_USER_REQUEST",
    "user/RETRIEVE_USER_SUCCESS",
    "user/RETRIEVE_USER_FAILURE"
)<string, UserData, string>();

export const updateUser = createAsyncAction(
    "user/UPDATE_USER_REQUEST",
    "user/UPDATE_USER_SUCCESS",
    "user/UPDATE_USER_FAILURE"
)<UserData, UserData, string>();

export const deleteUser = createAsyncAction(
    "user/DELETE_USER_REQUEST",
    "user/DELETE_USER_SUCCESS",
    "user/DELETE_USER_FAILURE"
)<string, UserData, string>();