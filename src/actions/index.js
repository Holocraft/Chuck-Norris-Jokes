import axios from 'axios';
import { FETCH_JOKE, FETCH_BRENDAN } from './types';

export const fetchJoke = () => async dispatch => {
  const res = await axios.get('https://api.icndb.com/jokes/random/50');
  dispatch({ type: FETCH_JOKE, payload: res.data });
};

export const fetchBrendanJoke = () => async dispatch => {
  const res = await axios.get(
    'https://api.icndb.com/jokes/random?firstName=Brendan&lastName=Luna'
  );
  dispatch({ type: FETCH_BRENDAN, payload: res.data });
};
