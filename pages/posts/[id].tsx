import Layout from '../../components/Layout'
import  {getAllId, getPostData } from '../../lib/main'

const Post = ({postData}) => {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
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
    const postData:any = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default Post