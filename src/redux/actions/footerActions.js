 import axios from 'axios'
import
    {
        FOOTER_GET_REQUEST,
        FOOTER_GET_SUCCESS,
        FOOTER_GET_FAIL
} from "../constants/footerConstants";

export const listFooter = ({email}) => async( dispatch ) =>
{
    try
    {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        dispatch( { type: FOOTER_GET_REQUEST} )
        const { data } = await axios.post( 'https://www.test.pinsoutinnovation.com/newsletter', { email }, config )
        console.log({data})
      
       
        dispatch( {
            type: FOOTER_GET_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: FOOTER_GET_FAIL,
            payload: error
        } )
        
    }
    
}