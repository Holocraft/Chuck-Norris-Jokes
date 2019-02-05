import { FETCH_BRENDAN } from '../actions/types';

export default function(state = { value: {} }, action) {
  switch (action.type) {
    case FETCH_BRENDAN:
      return action.payload;
    default:
      return state;
  }
}
