import Head from "next/head";
import ExperienceList from "../components/ExperienceList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkillsList from "../components/SkillsList";

export default function Home({ experienceData }) {
    return (
        <>
            <Head>
                <title>Nikhil Gupta</title>
                <meta name='description' content='Portfolio of Nikhil Gupta' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:fixed'>
                    <Sidebar />
                </div>
                <div className='flex-grow lg:ml-[32rem]'>
                    <Navbar />
                    <main className='mt-14 lg:m-5 space-y-28'>
                        <SkillsList />
                        <ExperienceList experienceData={experienceData} />
                    </main>
                </div>
            </div>
        </>
    );
}
export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_URL}/api/experience`);
    const experienceData = await response.json();

    return {
        props: {
            experienceData,
        },
    };
};
