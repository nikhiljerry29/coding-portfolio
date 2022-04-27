import {
    HiOutlineBriefcase, HiOutlineChatAlt2,
    HiOutlineCode, HiOutlineDocumentDuplicate, HiOutlineIdentification
} from "react-icons/hi";

const Navbar = () => {
    return (
        <header className='z-50 w-full fixed bottom-0 lg:sticky lg:top-0'>
            <nav className='p-5 lg:mr-5 text-black bg-gray-50 lg:bg-gray-100/95 '>
                <div className='flex justify-around md:justify-evenly lg:space-x-6 lg:justify-end'>
                    <a
                        className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                        href='#about'
                    >
                        <HiOutlineIdentification className='text-3xl lg:hidden' />
                        <span className='hidden lg:block'>About</span>
                    </a>
                    <a
                        className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                        href='#skills'
                    >
                        <HiOutlineCode className='text-3xl lg:hidden' />
                        <span className='hidden lg:block'>Skills</span>
                    </a>
                    <a
                        className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                        href='#experience'
                    >
                        <HiOutlineBriefcase className='text-3xl lg:hidden' />
                        <span className='hidden lg:block'>Experience</span>
                    </a>
                    <a
                        className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                        href='#projects'
                    >
                        <HiOutlineDocumentDuplicate className='text-3xl lg:hidden' />
                        <span className='hidden lg:block'>Projects</span>
                    </a>
                    <a
                        className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                        href='#contact'
                    >
                        <HiOutlineChatAlt2 className='text-3xl lg:hidden' />
                        <span className='hidden lg:block'>Contact</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
