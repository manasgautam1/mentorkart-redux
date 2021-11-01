import axios from 'axios'
import
    {
        LOGIN_GET_REQUEST,
        LOGIN_GET_SUCCESS,
        LOGIN_GET_FAIL,

        SIGNUP_GET_REQUEST,
        SIGNUP_GET_SUCCESS,
        SIGNUP_GET_FAIL
} from "../constants/loginConstants";

export const signIn = ( { email, password } ) => async ( dispatch ) =>

{
    try
    {
        const config = {
            header: {
                "Content-type": "multipart/form-data"
            }
        }
        
        dispatch( { type: LOGIN_GET_REQUEST,} )
        const { data } = await axios.post( 'https://mentorkart.org/api/login',{email, password},config )
       
       
        dispatch( {
            type: LOGIN_GET_SUCCESS,
            payload: data
        } )
        
        localStorage.setItem("userInfo", JSON.stringify(data))
        
    } catch ( error )
    {
        dispatch( {
            type: LOGIN_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
        
    }
    
}


export const signUp = ( {
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
} ) => async ( dispatch ) =>

{
  
    
    try
    {
        const config = {
            header: {
                "Content-type": "multipart/form-data"
            }
        }
        
        dispatch( { type: SIGNUP_GET_REQUEST,} )
        const { data } = await axios.post( 'https://mentorkart.org/api/register', {username,
      mobile_no,
      email,
      password,
      password_confirmation,
      user_type,
      first_name,
      last_name,
      country_code,
      country_name,}, config )
        console.log(data)
       
       
        dispatch( {
            type: SIGNUP_GET_SUCCESS,
            payload: data
        } )
        
        localStorage.setItem("userInfo", JSON.stringify(data))
        
    } catch ( error )
    {
        dispatch( {
            type: SIGNUP_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
        
    }
    
}