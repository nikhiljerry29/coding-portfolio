import PropTypes from "prop-types";
const SectionCard = ({ children, sectionName, showHeading }) => {
    return (
        <section id={sectionName} className='mx-5 py-4 lg:pt-24'>
            {showHeading && (
                <h2 className='capitalize text-2xl font-semibold mb-8 text-center lg:text-left'>
                    {sectionName}
                </h2>
            )}
            {children}
        </section>
    );
};

SectionCard.defaultProps = {
    showHeading: true,
};

SectionCard.propTypes = {
    children: PropTypes.node.isRequired,
    showHeading: PropTypes.bool,
};

export default SectionCard;
