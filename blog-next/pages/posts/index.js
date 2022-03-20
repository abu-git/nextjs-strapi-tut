import React from 'react'
import axios from 'axios'
import AllPosts from '../../components/AllPosts'

function Posts({posts}) {
  return (
    <AllPosts posts={posts.data} />
  )
}

export default Posts

export async function getStaticProps() {
    const postsResponse = await axios.get("http://localhost:1337/api/posts")
  
    return {
      props: {
        posts: postsResponse.data,
      },
    }
}