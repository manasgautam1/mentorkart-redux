import { combineReducers } from 'redux'

import { mentor } from './mentorReducer'
import { banner } from './bannerReducer'
import { blogs } from './blogsReducer'
import { feature } from './featureReducer'
import { partner } from './partnerReducer'
import { subscribe } from './subscribeReducer'
import { testimonial } from './testimonialsReducer'
import { youtube } from './youtubeReducer'


export default combineReducers( {
   
   mentorList: mentor,
   bannerList: banner,
   partnerList: partner,
   featureList: feature,
   blogsList: blogs,
   subscribeList: subscribe,
   testimonialList: testimonial,
   youtubeList: youtube,
    
})