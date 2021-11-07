import axios from 'axios';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_FAIL,
  SIGNUP_GET_REQUEST,
  SIGNUP_GET_SUCCESS,
  SIGNUP_GET_FAIL,
  OTP_GET_REQUEST,
  OTP_GET_SUCCESS,
  OTP_GET_FAIL,
  OTPRESEND_GET_SUCCESS,
  OTPRESEND_GET_REQUEST,
  OTPRESEND_GET_FAIL,
} from '../constants/loginConstants';

function base64url(source) {
  // Encode in classical base64
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
}

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: LOGIN_GET_REQUEST });
      const { data } = await axios.post(
        'https://mentorkart.org/api/login',
        { email, password },
        config
      );

      dispatch({
        type: LOGIN_GET_SUCCESS,
        payload: data,
      });

      if (data) {
        const payload = {
          email: email,
          password: password,
          app_key: 'mkwebsite',
        };

        const secretKey = Buffer.from('website-secret', 'base64');

        const token = jwt.sign(payload, secretKey, { expiresIn: '2d' });

        localStorage.setItem('userInfo', JSON.stringify(token));
      }
    } catch (error) {
      dispatch({
        type: LOGIN_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const signUp =
  ({
    username,
    category,
    mobile_no,
    email,
    password,
    password_confirmation,
    user_type,
    first_name,
    last_name,
    country_code,
    country_name,
    utm_source,
  }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: SIGNUP_GET_REQUEST });
      const { data } = await axios.post(
        'https://mentorkart.org/api/register',
        {
          category,
          username,
          mobile_no,
          email,
          password,
          password_confirmation,
          user_type,
          first_name,
          last_name,
          country_code,
          country_name,
        },
        config
      );

      dispatch({
        type: SIGNUP_GET_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const otpsection =
  ({
    otp,
    country_code,
    country_name,
    token,
    email,
    password,
    utm_source,
    user_category,
    mobile_number,

    first_name,
    last_name,
  }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      dispatch({ type: OTP_GET_REQUEST });
      const { data } = await axios.post(
        'https://mentorkart.org/api/verify-otp',
        { otp, country_code, country_name },
        config
      );
      console.log(data);

      const res = await axios.post(
        'https://mentorkart.org/api/store-leads',
        {
          utm_source,
          email,
          user_category,
          mobile_number,
          first_name,
          last_name,
          //   user_category,
        },
        config
      );
      console.log(res);

      dispatch({
        type: OTP_GET_SUCCESS,
        payload: data,
      });

      const header = {
        alg: 'HS256',
        typ: 'JWT',
      };

      const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
      const encodedHeader = base64url(stringifiedHeader);

      const payload = {
        email: email,
        password: password,
        app_key: 'mkwebsite',
      };

      const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
      const encodedData = base64url(stringifiedData);

      const unsignedToken = encodedHeader + '.' + encodedData;

      const secretKey = 'website-secret';

      let signature = CryptoJS.HmacSHA256(unsignedToken, secretKey);
      signature = base64url(signature);

      const signedToken = unsignedToken + '.' + signature;

      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(signedToken));
      }

      // if (data) {
      //   const token = jwt.sign(
      //     { email: email, password: password, app_key: 'mkwebsite' },
      //     'website-secret'
      //   );
      //   const encodedString = Buffer.from(token).toString('base64');
      //   localStorage.setItem('userInfo', encodedString);
      // }
    } catch (error) {
      dispatch({
        type: OTP_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const resend =
  ({ country_code, token }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      dispatch({ type: OTPRESEND_GET_REQUEST });
      const { data } = await axios.post(
        'https://mentorkart.org/api/resend-otp',
        { country_code },
        config
      );
      console.log(data);

      dispatch({
        type: OTPRESEND_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: OTPRESEND_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
