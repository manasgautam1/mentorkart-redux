import axios from 'axios'
import { BLOGS_GET_REQUEST, BLOGS_GET_SUCCESS, BLOGS_GET_FAIL} from "../constants/blogsConstants"

export const listBlogs = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: BLOGS_GET_REQUEST} )
        const { data } = await axios.get( 'https://www.test.pinsoutinnovation.com/blogs' )
       
        dispatch( {
            type: BLOGS_GET_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: BLOGS_GET_FAIL,
            payload: error
        } )        
    }   
}

