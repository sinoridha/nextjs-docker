import Layout from '~/src/components/MyLayout.js'
import {AccountContext} from '~/src/context/AccountContext'
import { useContext } from 'react'

export default function About() {
    const [account] = useContext(AccountContext);
    return (
        <Layout>
            <h2>Name : {account.name}</h2>
            <p>This is the about page 1</p>
        </Layout>
    )
}
