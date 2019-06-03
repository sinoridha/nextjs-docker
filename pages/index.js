import Layout from '~/components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { publicConf } from '~/utils/config'
import {AccountContext} from '~/context/AccountContext'
import { useContext } from 'react'

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
    const [account, setAccount] = useContext(AccountContext);

    const changeName = () => {
        setAccount(prevAccount => {
            return {...prevAccoun, name: "Bro"};
        });
    }

    return (
        <div>
            <Head>
                <title>{props.shows[0].show.name}</title>
            </Head>
            <Layout>
                <h1>My Blog | env : {publicConf.env}</h1>
                <h2>Name : {account.name}</h2>
                <ul>
                    <PostLink id="hello-nextjs" title="Hello Next.js" />
                    <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
                </ul>
                <button onClick={changeName}>Change name (change context state)</button>
            </Layout>
            <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                    color: red;
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: red;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </div>
    )
}

Index.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    return {
        shows: data
    }
}

export default Index