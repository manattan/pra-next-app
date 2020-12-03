import Link from "next/link"
import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/main'

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
            <section className="post" key={id}>
            <li>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                {date}
              </small>
            </li>
          </section>
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
