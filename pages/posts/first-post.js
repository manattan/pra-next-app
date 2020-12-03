import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const FirstPost = () => {
  // return <h1>Hello, world</h1>
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>Hello, World</h1>
        <h2>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
};

export default FirstPost;
