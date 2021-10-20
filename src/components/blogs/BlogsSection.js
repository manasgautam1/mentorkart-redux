import React, {  useEffect } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {listBlogs} from '../../redux/actions/blogsActions'

const BlogsSection = () =>
{
  
  const dispatch = useDispatch()
  
  const blogsSection = useSelector( state => state.blogsList )
  const { blogs } = blogsSection
  
  useEffect( () =>
  {
    dispatch( listBlogs() )

  },[dispatch])

  

  return (
    <div className='blogs-section pb-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <span>OUR BLOG</span>
        <h1>Latest News</h1>
        <p>
          Get latest blogs and alerts througb our Blog and News Section <br />
          Explore latest trends and education related stuff.
        </p>
        <div className=' mt-4'>
          <div className='blogs row'>
            {blogs[0] && blogs[0].map((blog, index) => {
              return (
                <Blog
                  key={index}
                  id={blog.id}
                  span={blog.blog_tag}
                  img={blog.blog_bg}
                  title={blog.blog_title}
                  author={blog.blog_author}
                  date={blog.blog_date}
                />
              );
            })}
          </div>
        </div>
        <div className='mt-4'>
          <Link to='/our-blogs' className='btn btn-outline-secondary'>
            Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
