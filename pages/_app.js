import App, { Container } from 'next/app';
import { AccountProvider } from '~/context/AccountContext';

// DO NOT change default of _app.js of next.js if you dont have any idea what you do.
// CHANGE ONLY for adding the provider.
// Reference https://nextjs.org/docs#custom-app

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidCatch (error, errorInfo) {
        console.log('CUSTOM ERROR HANDLING', error)
        // This is needed to render errors correctly in development / production
        super.componentDidCatch(error, errorInfo)
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                {/* All Provider should be nested list here */}
                <AccountProvider>
                    <Component {...pageProps} />
                </AccountProvider>
            </Container>
        );
    }
}

export default MyApp;