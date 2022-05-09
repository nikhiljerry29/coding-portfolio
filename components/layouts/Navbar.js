import Link from "next/link";
import {
    HiOutlineBriefcase,
    HiOutlineChatAlt2,
    HiOutlineCode,
    HiOutlineDocumentDuplicate,
    HiOutlineIdentification,
    HiOutlineHome,
} from "react-icons/hi";

const Navbar = () => {
    return (
        <header className='z-50 w-full fixed bottom-0 lg:sticky lg:top-0'>
            <nav className='p-5 lg:mr-5 text-black bg-gray-100/90 lg:bg-gray-100/95 '>
                <div className='flex justify-around md:justify-evenly lg:space-x-6 lg:justify-end'>
                    <Link href='/'>
                        <a className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'>
                            <HiOutlineHome className='text-3xl lg:hidden' />
                            <span className='hidden lg:block'>Home</span>
                        </a>
                    </Link>
                    <Link href='/#about'>
                        <a className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'>
                            <HiOutlineIdentification className='text-3xl lg:hidden' />
                            <span className='hidden lg:block'>About</span>
                        </a>
                    </Link>
                    <Link href='/#skills'>
                        <a className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'>
                            <HiOutlineCode className='text-3xl lg:hidden' />
                            <span className='hidden lg:block'>Skills</span>
                        </a>
                    </Link>
                    <Link href='/#experience'>
                        <a className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'>
                            <HiOutlineBriefcase className='text-3xl lg:hidden' />
                            <span className='hidden lg:block'>Experience</span>
                        </a>
                    </Link>

                    <Link href='/projects'>
                        <a className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'>
                            <HiOutlineDocumentDuplicate className='text-3xl lg:hidden' />
                            <span className='hidden lg:block'>Projects</span>
                        </a>
                    </Link>
                    <Link href='/#contact'>
                        <a className='text-gray-800 p-2 rounded-full lg:py-1 lg:rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'>
                            <HiOutlineChatAlt2 className='text-3xl lg:hidden' />
                            <span className='hidden lg:block'>Contact</span>
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
