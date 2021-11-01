import
    {
        LOGIN_GET_REQUEST,
        LOGIN_GET_SUCCESS,
        LOGIN_GET_FAIL
} from "../constants/loginConstants";
    
export const login = (state={}, action) =>
{
    switch ( action.type )
    {
        case LOGIN_GET_REQUEST:
            return {loading:true}
        case LOGIN_GET_SUCCESS:
            return {loading:false, login:action.payload}
        case LOGIN_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}