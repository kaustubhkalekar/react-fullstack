import axios from "axios";
import { PROCCESSES, base_url } from "../../utils/constants";
import { startProcess, endProcess } from "../app/actions";
import * as types from './types';

export const getUsers = () => async dispatch => {
    dispatch(startProcess(PROCCESSES.USER.get_user));
    try {
        const response = await axios.get(`${base_url}/user/allusers`)
        dispatch({
            type: types.RETRIEVE_USERS,
            users: response.data
        })
        dispatch(endProcess(PROCCESSES.USER.get_user))
    }
    catch (error) {
        alert("Not Able To Get Users")
        dispatch(endProcess(PROCCESSES.USER.get_user))
    }
}

export const addUser = (payload) => async dispatch => {
    dispatch(startProcess(PROCCESSES.USER.add_user))
    try {
        const response = await axios.post(`${base_url}/user/adduser`, payload)
        dispatch({
            type: types.ADD_USER,
            user: response.data
        })
        dispatch(getUsers())
        dispatch(endProcess(PROCCESSES.USER.add_user))
    }
    catch (error) {
        alert("Not able to add user")
        dispatch(endProcess(PROCCESSES.USER.add_user))
    }
}