import * as types from './types';


/* This will add the process name to the constants when API called.
    This will be helpfull to add loaders till api succeeds or fails
*/
export const startProcess = processName => {
    return {
        type: types.START_PROCESS,
        payload: { processName }
    };
};



/* This will stop the processname for which the process has been called during the API call.
*/
export const endProcess = processName => {
    return {
        type: types.END_PROCESS,
        payload: { processName }
    };
};