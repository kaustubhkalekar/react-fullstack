import { get } from "lodash";

export const getAppProcesses = state => get(state, 'app-processes') || [];