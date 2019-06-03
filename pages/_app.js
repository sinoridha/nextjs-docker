import App, { Container } from 'next/app';
import { AccountProvider } from '~/context/AccountContext';

class MyApp extends App {

    // Dont change default of _app.js of next.js
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                /* All Provider should be listed here */
                <AccountProvider>
                    <Component {...pageProps} />
                </AccountProvider>
            </Container>
        );
    }
}

export default MyApp;