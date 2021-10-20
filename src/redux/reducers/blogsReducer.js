import { BLOGS_GET_REQUEST, BLOGS_GET_SUCCESS, BLOGS_GET_FAIL} from "../constants/blogsConstants"

export const blogs = ( state = { blogs: [] }, action )=>{
    switch ( action.type )
    {
        case BLOGS_GET_REQUEST:
            return { loading: true, blogs: [] }
        case BLOGS_GET_SUCCESS:
            return { loading: false, blogs: action.payload }
        case BLOGS_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



