const Navbar = () => {
    return (
        <nav className='p-5 mt-1 mr-5 sticky top-0  text-black hidden lg:block'>
            <div className='flex space-x-6 justify-end'>
                <a className='nav__link' href='#about'>
                    About
                </a>
                <a className='nav__link' href='#skills'>
                    Skills
                </a>
                <a className='nav__link' href='#experience'>
                    Experience
                </a>
                <a className='nav__link' href='#projects'>
                    Projects
                </a>
                <a className='nav__link' href='#contact'>
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
