import axios from 'axios'
import HomeHeader from '../components/HomeHeader'
import HomeLatestPosts from '../components/HomeLatestPosts'

export default function Home({posts}) {
  //console.log(posts.data[1].attributes.title)
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
      {/*<h1>{posts.data[0].attributes.title}</h1>
      <h1>{posts.data[1].attributes.title}</h1>*/}
    </>
  )
}


export async function getStaticProps() {
  const postsResponse = await axios.get("http://localhost:1337/api/posts")
  //const data

  //console.log(postsResponse.data)
  return {
    props: {
      posts: postsResponse.data,
    },
  }
}