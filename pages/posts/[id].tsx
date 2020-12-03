import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import {getAllId, getPostData } from '../../lib/main'

const Post = ({postData}) => {
    return (
        <Layout>
            <Head>
              <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <Date dateString={postData.date} />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = getAllId()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const postData:any = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default Post