import { stringArrayToObject } from '~utils/array';

export const actions: any = stringArrayToObject(['SET_TITLE', 'SELECT_CATEGORY'], '@@GLOBAL');

export const actionCreators = {
  setTitle: (payload: string) => ({ type: actions.SET_TITLE, payload })
};
