import { skillsData } from "../utils/skillUtil";
import SkillItem from "./SkillItem";
import SectionCard from "./shared/SectionCard";
import { AnimatePresence, motion } from "framer-motion";

const SkillsList = () => {
    return (
        <SectionCard sectionName='skills'>
            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 px-3 lg:px-0'>
                <AnimatePresence>
                    {skillsData.map(({ Icon, title }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <SkillItem Icon={Icon} title={title} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </SectionCard>
    );
};

export default SkillsList;
