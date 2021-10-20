import axios from 'axios'
import
    {
        MENTOR_LIST_REQUEST,
        MENTOR_LIST_SUCCESS,
        MENTOR_LIST_FAIL
} from "../constants/mentorConstants"

export const listMentor = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: MENTOR_LIST_REQUEST} )
        const { data } = await axios.get( 'https://mentorkart.org/api/sso-mentor-list' )
        
        
        dispatch( {
            type: MENTOR_LIST_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: MENTOR_LIST_FAIL,
            payload: error
        } )
        
    }
    
}