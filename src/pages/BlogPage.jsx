import React from 'react'
import { useEffect } from 'react';
import Blogs from '../components/home/Blogs'

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Blogs/>
    </div>
  )
}

export default BlogPage
