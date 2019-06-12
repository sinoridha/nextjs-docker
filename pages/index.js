import { useContext, useEffect, useState } from 'react'
import Layout from '~/src/components/MyLayout.js'
import Link from '~/src/utils/link'
import Head from '~/src/utils/head'
import request from '~/src/utils/request'
import { publicConf } from '~/src/utils/config'
import { getUser, setUser } from '~/src/services/account'
import {AccountContext} from '~/src/context/AccountContext'

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
    const [userId, setUserId] = useState(1);

    const changeName = () => {
        setAccount(prevAccount => {
            return {...prevAccount, name: "The Name Changer"};
        });
        // setAccount(userId + 1)
    }

    useEffect(() => {
        // const updateAccount = async() => {
        //     // setUser(userId);
        //     const[ err, user] = await getUser(userId)
        //     if (err) {
        //         console.log('err', err)
        //         alert('Ups, json-server not running')
        //     } else {
        //         setAccount({...account,name: user.data.first_name})
        //     }
        // }
        // updateAccount()
    }, []);

    useEffect(() => {
        // console.log('use effect 1');
        const updateAccount = async() => {
            await setUser(userId, (use) => {
                console.log('on setUser');
                console.log('user', use.first_name);
                setAccount({...account,name: use.usefirst_name})
            });
        }
        updateAccount()
    }, []);

    return (
        <div>
            <Head>
                <title>{props.shows[0].show.name}</title>
            </Head>
            <Layout>
                <h1>Home | env : {publicConf.env}</h1>
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
    const res = await request.default('http://api.tvmaze.com/search/shows?q=batman')
    const data = res.data
    return {
        shows: data
    }
}

export default Index