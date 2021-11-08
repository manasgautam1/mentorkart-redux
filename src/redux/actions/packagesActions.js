import axios from 'axios';
import {
  PACKAGES_GET_REQUEST,
  PACKAGES_GET_SUCCESS,
  PACKAGES_GET_FAIL,
  PACKAGES_GET_SEARCH,
} from '../constants/packagesConstants';

export const listPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listStudentPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('STUDENT')
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listProfessionalPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('PROFESSIONAL')
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listEntrepreneurPackages = () => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('ENTREPRENEUR')
    );

    dispatch({
      type: PACKAGES_GET_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const searchPackages = (query) => async (dispatch) => {
  try {
    dispatch({ type: PACKAGES_GET_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-get-packages'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.package_name) {
        return x.package_name.toLowerCase().includes(query.toLowerCase());
      }
      if (x.description) {
        return x.description.toLowerCase().includes(query.toLowerCase());
      }
      if (x.package_type) {
        return x.package_type.toLowerCase().includes(query.toLowerCase());
      }
      return x.user_category;
    });

    // console.log(std);
    dispatch({
      type: PACKAGES_GET_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PACKAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
