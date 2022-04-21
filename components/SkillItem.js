const SkillItem = ({ Icon, title }) => {
    return (
        <div className='group cursor-pointer text-center'>
            <Icon className='text-6xl mb-5 text-rose-600 group-hover:animate-bounce mx-auto' />
            <h2 className='text-lg'>{title}</h2>
        </div>
    );
};

export default SkillItem;
