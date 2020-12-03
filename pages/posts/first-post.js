import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const FirstPost = () => {
  // return <h1>Hello, world</h1>
  return (
    <Layout>
        <h1>Hello, world</h1>
        <p>こんにちは、せかい</p>
    </Layout>
  );
};

export default FirstPost;
