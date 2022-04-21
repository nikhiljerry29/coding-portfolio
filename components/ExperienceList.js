import ExperienceItem from "./ExperienceItem";

export default function ExperienceList({ experienceData }) {
    return (
        <section id='experience' className='mx-5'>
            <h2 className='text-2xl font-semibold mb-5'>Work Experience</h2>

            {experienceData.map(
                ({ title, company, startDate, endDate }, index) => (
                    <ExperienceItem
                        key={index}
                        title={title}
                        company={company}
                        startDate={startDate}
                        endDate={endDate}
                        index={index}
                    />
                )
            )}
        </section>
    );
}
