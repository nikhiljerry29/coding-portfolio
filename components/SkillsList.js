import { skillsData } from "../utils/skillUtil";
import SkillItem from "./SkillItem";
import { AnimatePresence, motion } from "framer-motion";

const SkillsList = () => {
    return (
        <section className='mx-5 my-2' id='skills'>
            <h2 className='text-2xl font-bold mb-8 text-center lg:text-left'>
                Skills
            </h2>
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
        </section>
    );
};

export default SkillsList;
