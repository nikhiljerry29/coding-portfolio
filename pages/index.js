import Head from "next/head";
import ExperienceList from "../components/ExperienceList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
                    <main className='lg:m-5'>
                        <ExperienceList experienceData={experienceData} />
                    </main>
                </div>
            </div>
        </>
    );
}
export const getStaticProps = async () => {
    // const response = await fetch(`${process.env.API_URL}/api/experience`);
    // const experienceData = await response.json();
    const experienceData = [
        {
            title: "Senior Quality Analyst",
            company: "L&T Infotech Ltd.",
            startDate: "Aug 2021",
            endDate: "Present",
        },
        {
            title: "Graduate Engineer Trainee",
            company: "L&T Infotech Ltd.",
            startDate: "Aug 2020",
            endDate: "July 2021",
        },
        {
            title: "Intern Crop Quality Analyst",
            company: "Intello Labs Pvt. Ltd.",
            startDate: "July 2019",
            endDate: "May 2019",
        },
    ];
    return {
        props: {
            experienceData,
        },
    };
};
