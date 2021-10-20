import axios from 'axios'
import
    {
        PARTNER_GET_REQUEST,
        PARTNER_GET_SUCCESS,
        PARTNER_GET_FAIL
} from "../constants/partnerConstants"

export const listpartner = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: PARTNER_GET_REQUEST} )
        const { data } = await axios.get( 'https://www.test.pinsoutinnovation.com/partners' )
        
        
        dispatch( {
            type: PARTNER_GET_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: PARTNER_GET_FAIL,
            payload: error
        } )
        
    }
    
}