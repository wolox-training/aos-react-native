import { createReducer, completeReducer, completeState, onSuccess } from 'redux-recompose';
import PropTypes  from 'prop-types';

import { actions } from './actions';

const stateDescription = {

}

const initialState = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.],
  override: {
   [actions.SAVE_TASK]: (state, action) =>
   state.merge({ initialLoading: false, [action.target]: action.payload  }),
   [action.SUCCESS]:onSuccess()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
