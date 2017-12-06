import axios from 'axios';

import { FETCH_USER, FETCH_SURVEYS } from './types';

const fetchUser = () =>
  async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
  };

const handleStripeToken = (token) =>
  async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data })
  };

const submitSurvey = (values, history) =>
  async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data })
  };

const fetchSurveys = () =>
  async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data })
  };


export {
  fetchUser,
  handleStripeToken,
  submitSurvey,
  fetchSurveys
};
