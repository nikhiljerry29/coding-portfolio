import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <>
            <Head>
                <title>Nikhil Gupta</title>
                <meta name='description' content='Portfolio of Nikhil Gupta' />
                <link rel='icon' href='/favicon.png' />
            </Head>

            <Sidebar />
        </>
    );
}
