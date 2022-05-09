import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang='en-US'>
            <Head>
                <meta name='description' content='Portfolio of Nikhil Gupta' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <body className='font-poppins bg-gray-100 text-gray-900 scroll-smooth selection:bg-yellow-300'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
