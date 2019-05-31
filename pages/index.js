import Layout from '~/components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { publicConf } from '~/utils/config'

function PostLink(props) {
    return (
        <li>
            <Link as={`/p/${props.id}.html`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}

function Index(props) {
    return (
        <div>
            <Head>
                <title>{props.shows[0].show.name}</title>
            </Head>
            <Layout>
                <h1>My Blog | env : {publicConf.env}</h1>
                <ul>
                    <PostLink id="hello-nextjs" title="Hello Next.js" />
                    <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
                </ul>
            </Layout>
        </div>
    )
}

Index.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    // console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}

export default Index