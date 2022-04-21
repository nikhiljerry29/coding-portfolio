import {
    SiFacebook,
    SiGithub,
    SiInstagram,
    SiLinkedin,
    SiGmail,
} from "react-icons/si";

const SocialIcons = () => {
    return (
        <div className='flex space-x-3 text-2xl'>
            <a href='#' rel='noreferrer' className='icon'>
                <SiFacebook />
            </a>
            <a href='#' rel='noreferrer' className='icon'>
                <SiGithub />
            </a>
            <a href='#' rel='noreferrer' className='icon'>
                <SiInstagram />
            </a>
            <a href='#' rel='noreferrer' className='icon'>
                <SiLinkedin />
            </a>
            <a href='#' rel='noreferrer' className='icon'>
                <SiGmail />
            </a>
        </div>
    );
};

export default SocialIcons;
