import Image from "next/image";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { getTotalExpYears } from "../utils/experienceUtil";
import SocialIcons from "./SocialIcons";

const Sidebar = () => {
    const totalExpYears = getTotalExpYears();
    return (
        <aside className='max-w-lg mx-auto px-7 mb-10 lg:mx-0'>
            <div className='flex flex-col justify-center items-center text-center space-y-5 lg:items-start lg:text-left lg:h-screen'>
                <div className='shadow-lg relative h-[380px] w-full rounded-b-[125px] lg:rounded-lg overflow-hidden'>
                    <Image
                        src='/assets/NikhilGupta.jpg'
                        layout='fill'
                        alt='Nikhil Gupta'
                        objectFit='cover'
                        objectPosition='top'
                    />
                </div>
                <h1 className='text-3xl font-bold'>
                    Nikhil{" "}
                    <span className='underline decoration-rose-600'>Gupta</span>
                </h1>
                <h4 className='text-lg text-gray-700 font-mono'>
                    Quality Analyst | Web Developer{" "}
                    <span className='hidden sm:inline'>|</span> Storyteller
                </h4>
                <p className='text-gray-600 tracking-wide'>
                    A specialist in Web{" "}
                    <span className='text-rose-600'>Testing / Development</span>{" "}
                    with more than {totalExpYears} years of experience in IT
                    industry.
                </p>
                <h4 className='text-lg text-gray-700'>
                    <HiOutlineOfficeBuilding className='inline align-middle' />
                    <span className='ml-2'>
                        Senior Quality Analyst at L&amp;T Infotech Ltd.{" "}
                    </span>
                </h4>
                <SocialIcons />
            </div>
        </aside>
    );
};

export default Sidebar;
