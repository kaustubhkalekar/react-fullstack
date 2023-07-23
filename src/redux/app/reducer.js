import { produce } from 'immer';
import * as types from './types';
import { type } from "@testing-library/user-event/dist/type";

const INITIAL_STATE = {
    processes: []
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.START_PROCESS: {
            return produce(state, draft => {
                draft.processes = draft.processes.filter(
                    processName => processName != action.payload.processName
                );
                draft.processes.push(action.payload.processName)
            })
        }

        case types.END_PROCESS: {
            return produce(state, draft => {
                draft.processes = draft.processes.filter(
                    processName => processName != action.payload.processName
                );
            })
        }
        default:
            return state;
    }
}