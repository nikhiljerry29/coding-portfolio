import SectionCard from "./shared/SectionCard";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = ({ experienceData }) => {
    return (
        <SectionCard sectionName={"experience"}>
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
        </SectionCard>
    );
};
export default ExperienceList;
