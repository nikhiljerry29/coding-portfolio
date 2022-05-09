import Head from "next/head";
import ContactForm from "../components/ContactForm";
import ExperienceList from "../components/experience/ExperienceList";
import Navbar from "../components/layouts/Navbar";
import Projects from "../components/project/Projects";
import Sidebar from "../components/layouts/Sidebar";
import SkillsList from "../components/skills/SkillsList";

export default function Home({ experienceData }) {
    return (
        <>
            <Head>
                <title>Nikhil Gupta</title>
            </Head>
            <div className='flex flex-col lg:flex-row xl:container xl:mx-auto'>
                <div className='lg:fixed'>
                    <Sidebar />
                </div>
                <div className='flex-grow lg:ml-[32rem]'>
                    <Navbar />
                    <main className='mt-14 lg:m-5 space-y-28'>
                        <SkillsList />
                        <ExperienceList experienceData={experienceData} />
                        <Projects />
                        <ContactForm />
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
