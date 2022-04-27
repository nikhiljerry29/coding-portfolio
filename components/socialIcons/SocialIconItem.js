const SocialIconItem = ({ Icon, title, hoverColor }) => {
    return (
        <a
            href='#'
            rel='noreferrer'
            className={`p-2.5 rounded-full bg-white shadow group hover:shadow-md active:scale-95 ${hoverColor}`}
        >
            <span className='flex items-center'>
                <Icon />
                <span className='hidden lg:group-hover:block text-base pl-2 transition-all duration-100 ease-in-out'>
                    {title}
                </span>
            </span>
        </a>
    );
};

export default SocialIconItem;
