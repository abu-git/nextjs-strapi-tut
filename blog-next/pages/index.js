
export default function Home(props) {
  return (
    <>
      <h1>{props.content}</h1>
      
    </>
  )
}


export async function getServerSideProps() {

  return {
    props: {
      content: "Some content"
    }
  }
}