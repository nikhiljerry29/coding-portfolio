import {
    SiFacebook,
    SiGithub,
    SiInstagram,
    SiLinkedin,
    SiGmail,
} from "react-icons/si";
import SocialIconItem from "./SocialIconItem";

const SocialIcons = () => {
    return (
        <div className='flex space-x-3 text-2xl'>
            <SocialIconItem
                Icon={SiFacebook}
                title='Facebook'
                hoverColor='text-blue-600'
            />
            <SocialIconItem
                Icon={SiGithub}
                title='Github'
                hoverColor='text-gray-600'
            />
            <SocialIconItem
                Icon={SiInstagram}
                title='Instagram'
                hoverColor='text-pink-600'
            />
            <SocialIconItem
                Icon={SiLinkedin}
                title='LinkedIn'
                hoverColor='text-sky-600'
            />
            <SocialIconItem
                Icon={SiGmail}
                title='Gmail'
                hoverColor='text-red-600'
            />
        </div>
    );
};

export default SocialIcons;
