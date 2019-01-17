import { createTypes, completeTypes, withPostSucess } from 'redux-recompose';

export const actions  = createTypes(completeTypes(['SAVE_TASK'], ['SUCCESS']), '@@AUTH');

export const actionCreators = {
  init: task => ({type: actions.SAVE_TASK, ...payload}),
  show: show => ({
   type: actions.SUCESS,
   ...payload,
  })
}
