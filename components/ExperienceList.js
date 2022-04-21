import ExperienceItem from "./ExperienceItem";

export default function ExperienceList({ experienceData }) {
    return (
        <section id='experience' className='mx-5 my-2'>
            <h2 className='text-2xl font-semibold mb-8 text-center lg:text-left'>Work Experience</h2>

            {experienceData.map(
                ({ title, company, startDate, endDate }, index) => (
                    <ExperienceItem
                        key={index}
                        title={title}
                        company={company}
                        startDate={startDate}
                        endDate={endDate}
                    />
                )
            )}
        </section>
    );
}
