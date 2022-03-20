import React from 'react'
import axios from 'axios'


function PostPage({post}) {
    return (
        <>
            <article>
                <header>
                    <h1>{post.data.attributes.title}</h1>
                    <h2>{post.data.attributes.description}</h2>
                </header>
                <section>
                    {post.data.attributes.content}
                </section>
            </article>
        </>
  )
}

export default PostPage

export async function getStaticProps({params}) {
    const postResponse = await axios.get(`http://localhost:1337/api/posts/${params.id}`)

    //console.log(postResponse)
    return {
        props: {
            post: postResponse.data
        }
    }
}

export async function getStaticPaths() {
    const postsResponse = await axios.get("http://localhost:1337/api/posts")

    //console.log(postsResponse.data.data)
    const paths = postsResponse.data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    })
    return {
        paths,
        fallback: false,
    }
}