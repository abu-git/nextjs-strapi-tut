import React from 'react'

function PostPreview({post}) {
  return (
    <div className='postPreview'>
        <h3>{post.attributes.title}</h3>
        <p>{post.attributes.description}</p>
    </div>
  )
}

export default PostPreview