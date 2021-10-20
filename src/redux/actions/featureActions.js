 import axios from 'axios'
import
    {
        FEATURE_GET_REQUEST,
        FEATURE_GET_SUCCESS,
        FEATURE_GET_FAIL
} from "../constants/featureConstants";

export const listFeature = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: FEATURE_GET_REQUEST} )
        const { data } = await axios.get( 'https://www.test.pinsoutinnovation.com/news' )
      
       
        dispatch( {
            type: FEATURE_GET_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: FEATURE_GET_FAIL,
            payload: error
        } )
        
    }
    
}