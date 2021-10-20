import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import Axios from 'axios';
import parse from 'html-react-parser';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const SingleBlog = (props) => {
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [img, setImg] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(
      'https://www.test.pinsoutinnovation.com/blogs/' + props.match.params.id
    ).then((res) => {
      setContent(res.data[0].blog_content);
      setDate(res.data[0].blog_date);
      setImg(res.data[0].blog_bg);
      setAuthor(res.data[0].blog_author);
      setTitle(res.data[0].blog_title);
      setTag(res.data[0].blog_tag);
    });
  }, [props.match.params.id]);

  return (
    <div className='single-blog'>
      <MyNavbar />
      <div className='section-1'>
        <img
          src={'https://www.test.pinsoutinnovation.com/uploaded-images/' + img}
          alt=''
        />
        <div className='content'>
          <div className='container d-flex flex-column justify-content-between py-3'>
            <h1 className='mb-3'>{title}</h1>
            <div className='d-flex sec justify-content-between align-items-center mb-2'>
              <span className='badge rounded-pill bg-warning'>{tag}</span>
              <span>{date.split('T')[0]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='section-2'>
        <div className='container py-5'>
          <div className='main-content'>
            {/* <div>{parse(blog.blog_content)}</div> */}
            {parse(content)}
            <address className='lead'>~ {author}</address>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
