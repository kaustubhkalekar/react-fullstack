import { produce } from "immer";
import * as types from './types';

const INTIAL_STATE = {
    users: [],
}

export default (state = INTIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.RETRIEVE_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case types.ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.user]
            };
        }
        default:
            return state;
    }
}