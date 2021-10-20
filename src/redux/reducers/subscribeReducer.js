import
    {
        SUBSCRIBE_GET_REQUEST,
        SUBSCRIBE_GET_SUCCESS,
        SUBSCRIBE_GET_FAIL
} from "../constants/subscriptionConstants";

export const subscribe = (state={subscribe:[]}, action) =>
{
    switch ( action.type )
    {
        case SUBSCRIBE_GET_REQUEST:
            return {loading: true, subscribe: []}
        case SUBSCRIBE_GET_SUCCESS:
            return {loading: false, subscribe: action.payload}
        case SUBSCRIBE_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}