import axios from 'axios'
import
    {
        YOUTUBE_GET_REQUEST,
        YOUTUBE_GET_SUCCESS,
        YOUTUBE_GET_FAIL
} from "../constants/youtubeConstants";

export const listYoutube = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: YOUTUBE_GET_REQUEST} )
        const { data } = await axios.get( 'https://mentorkart.org/api/sso-youtube-video' )
       
        dispatch( {
            type: YOUTUBE_GET_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: YOUTUBE_GET_FAIL,
            payload: error
        } )
        
    }
    
}