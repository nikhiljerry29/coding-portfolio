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
                url='https://www.facebook.com/ng5667'
            />
            <SocialIconItem
                Icon={SiGithub}
                title='Github'
                hoverColor='text-gray-600'
                url='https://github.com/nikhiljerry29'
            />
            <SocialIconItem
                Icon={SiInstagram}
                title='Instagram'
                hoverColor='text-pink-600'
                url='https://www.instagram.com/jerry_the_shawl_man_/'
            />
            <SocialIconItem
                Icon={SiLinkedin}
                title='LinkedIn'
                hoverColor='text-sky-600'
                url='https://www.linkedin.com/in/nikhil-gupta-6a893114a/'
            />
            <SocialIconItem
                Icon={SiGmail}
                title='Gmail'
                hoverColor='text-red-600'
                url='mailto:nikhil.gupta5667@gmail.com'
            />
        </div>
    );
};

export default SocialIcons;
