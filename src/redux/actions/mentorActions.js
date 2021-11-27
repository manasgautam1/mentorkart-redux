import axios from 'axios';
import {
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_LIST_SEARCH,
  MENTOR_LIST_DETAILS_REQUEST,
  MENTOR_LIST_DETAILS_SUCCESS,
  MENTOR_LIST_DETAILS_FAIL,
} from '../constants/mentorConstants';

export const listMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: fil,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listStudentMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('STUDENT');
      }
      return x.user_categories;
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listProfessionalMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('PROFESSIONAL');
      }
      return x.user_categories;
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listEntrepreneurMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('ENTREPRENEUR');
      }
      return x.user_categories;
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const searchMentor = (query) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data
    const std = fil.filter( ( x ) =>
    {
     return Object.values(x).join("").toLowerCase().includes(query.toLowerCase())
    } );
    
    console.log(std)

    dispatch({
      type: MENTOR_LIST_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listMentorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://mentorkart.org/api/sso-mentor/${id}`
    );
    const fil = data.data;

    dispatch({
      type: MENTOR_LIST_DETAILS_SUCCESS,
      payload: fil,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
