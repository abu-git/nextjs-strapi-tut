import axios from 'axios'

export default function Home({post}) {
  console.log(post.data[1].attributes.title)
  return (
    <>
      <h1>{post.data[0].attributes.title}</h1>
      <h1>{post.data[1].attributes.title}</h1>
    </>
  )
}


export async function getStaticProps() {
  const postsResponse = await axios.get("http://localhost:1337/api/posts")
  //const data

  //console.log(postsResponse.data)
  return {
    props: {
      post: postsResponse.data,
    },
  }
}