import { Platform } from reac-native;

export const TASK_HEIGHT = Platform.OS === 'ios' ? 570:460;
export const HEADER_NAV_SPACE = Platform.OS === 'ios' ? 40 : 0;
export const HEADER_NAV_HEIGHT = Platform.OS === 'ios' ? 80 : 50;
