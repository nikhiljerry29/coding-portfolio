const Navbar = () => {
    return (
        <nav className='p-5 mt-1 mr-5 sticky top-0 text-black hidden lg:block bg-gray-100/90'>
            <div className='flex space-x-6 justify-end'>
                <a
                    className='px-2 py-1 rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                    href='#about'
                >
                    About
                </a>
                <a
                    className='px-2 py-1 rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                    href='#skills'
                >
                    Skills
                </a>
                <a
                    className='px-2 py-1 rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                    href='#experience'
                >
                    Experience
                </a>
                <a
                    className='px-2 py-1 rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                    href='#projects'
                >
                    Projects
                </a>
                <a
                    className='px-2 py-1 rounded-lg hover:text-white hover:bg-rose-500 active:bg-rose-400'
                    href='#contact'
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
