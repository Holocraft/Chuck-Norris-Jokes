import { FETCH_JOKE } from '../actions/types';

export default function(state = { value: [] }, action) {
  switch (action.type) {
    case FETCH_JOKE:
      return action.payload;
    default:
      return state;
  }
}
