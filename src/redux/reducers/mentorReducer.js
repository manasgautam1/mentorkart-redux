import
    {
        MENTOR_LIST_REQUEST,
        MENTOR_LIST_SUCCESS,
        MENTOR_LIST_FAIL
} from "../constants/mentorConstants";

export const mentor = (state={mentor:[]}, action) =>
{
    switch ( action.type )
    {
        case MENTOR_LIST_REQUEST:
            return {loading: true, mentor: []}
        case MENTOR_LIST_SUCCESS:
            return {loading: false, mentor: action.payload}
        case MENTOR_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}