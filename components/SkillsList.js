import {
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiSelenium,
    SiMysql,
    SiMongodb,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    SiJava,
    SiJavascript
} from "react-icons/si";
import SkillItem from "./SkillItem";

const SkillsList = () => {
    return (
        <section className='mx-5 my-2' id="skills">
            <h2 className='text-2xl font-bold mb-8 text-center lg:text-left'>Skills</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 px-3 lg:px-0'>
                <SkillItem Icon={SiJava} title='Java' />
                <SkillItem Icon={SiSelenium} title='Selenium' />
                <SkillItem Icon={SiJavascript} title='Javascript' />
                <SkillItem Icon={SiReact} title='React' />
                <SkillItem Icon={SiNextdotjs} title='NextJS' />
                <SkillItem Icon={SiExpress} title='Express' />
                <SkillItem Icon={SiMysql} title='MySql' />
                <SkillItem Icon={SiMongodb} title='MongoDB' />
                <SkillItem Icon={SiTailwindcss} title='TailwindCSS' />
                <SkillItem Icon={SiBootstrap} title='Bootstrap' />
                <SkillItem Icon={SiGit} title='Git/Github' />
            </div>
        </section>
    );
};

export default SkillsList;
