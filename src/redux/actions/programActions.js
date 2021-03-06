import axios from 'axios';
import {
  PROGRAM_GET_REQUEST,
  PROGRAM_GET_SUCCESS,
  PROGRAM_GET_FAIL,
  PROGRAM_GET_SEARCH,
} from '../constants/programConstants';

export const listProgram = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST });
    const { data } = await axios.get('https://mentorkart.org/api/sso-courses');

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listStudentCourse = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST });
    const { data } = await axios.get('https://mentorkart.org/api/sso-courses');
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('STUDENT')
    );

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listProfessionalCourse = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST });
    const { data } = await axios.get('https://mentorkart.org/api/sso-courses');
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('PROFESSIONAL')
    );

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listEntrepreneurCourse = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST });
    const { data } = await axios.get('https://mentorkart.org/api/sso-courses');
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('ENTREPRENEUR')
    );

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const searchProgram = (query) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST });
    const { data } = await axios.get('https://mentorkart.org/api/sso-courses');
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.LMS_course_name) {
        return x.LMS_course_name.toLowerCase().includes(query.toLowerCase());
      }
      if (x.mk_course_name) {
        return x.mk_course_name.toLowerCase().includes(query.toLowerCase());
      }
      if (x.description) {
        return x.description.toLowerCase().includes(query.toLowerCase());
      }
      if (x.course_type) {
        return x.course_type.toLowerCase().includes(query.toLowerCase());
      }
      return x.user_category;
    });

    // console.log(std);
    dispatch({
      type: PROGRAM_GET_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
