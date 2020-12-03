import Layout from "../components/Layout";
import getSortedPostsData from '../lib/main'

const Home = ({allPostsData}) => {
  return (
    <Layout home>
      <section>
        <p>I'm Takanori.</p>
        <p>I'm in Hokkaido Univ. and major in Biotechnology and computer science.</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({id,date,title})=>(
            <div className="post">
            <li>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          </div>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// これでHomeにpropされる
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
} 

export default Home
