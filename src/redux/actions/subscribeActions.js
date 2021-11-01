import axios from 'axios';
import {
  SUBSCRIBE_GET_REQUEST,
  SUBSCRIBE_GET_SUCCESS,
  SUBSCRIBE_GET_FAIL,
} from '../constants/subscriptionConstants';

export const listSubscribe = () => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-subscription-plans'
    );
    // const fil = data.data

    dispatch({
      type: SUBSCRIBE_GET_SUCCESS,
      payload: [data],
    });
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
