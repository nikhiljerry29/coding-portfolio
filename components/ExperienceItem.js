import { HiMinus, HiChevronRight } from "react-icons/hi";

const ExperienceItem = ({ title, company, startDate, endDate, index }) => {
    return (
        <div className='py-5 px-3 border-t-4 lg:px-7'>
            <div className='flex flex-col md:flex-row justify-between items-baseline gap-3'>
                <div className='space-y-3'>
                    <h3 className='text-xl text-black'>{title}</h3>
                    <p className='text-lg text-rose-600'>{company}</p>
                </div>
                <div className='flex text-sm items-center'>
                    <p>{startDate}</p>
                    <HiMinus className="mx-2"/>
                    <p>{endDate}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
