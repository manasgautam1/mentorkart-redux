import axios from 'axios'
import
    {
        TESTIMONIAL_GET_REQUEST,
        TESTIMONIAL_GET_SUCCESS,
        TESTIMONIAL_GET_FAIL
} from "../constants/testimonialConstants";

export const listTestimonial = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: TESTIMONIAL_GET_REQUEST} )
        const { data } = await axios.get( 'https://www.test.pinsoutinnovation.com/testimonials' )
       
        dispatch( {
            type: TESTIMONIAL_GET_SUCCESS,
            payload: [data]
        } )
        
    } catch ( error )
    {
       dispatch( {
            type: TESTIMONIAL_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
        
    }
    
}