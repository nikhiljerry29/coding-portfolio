import Image from "next/image";

const ContactForm = () => {
    return (
        <section id='contact' className='mx-5 py-2 lg:pt-24'>
            <div className='space-y-10'>
                <h2 className='max-w-lg text-2xl font-semibold lg:text-3xl'>
                    Let&apos;s make something amazing together.
                </h2>
                <h3 className='text-xl lg:text-2xl'>
                    Start by saying <span className='text-rose-600'>Hi!</span>
                </h3>
                <p className='text-gray-600 text-sm lg:text-md'>Email me at</p>
                <a
                    href='mailto:nikhil.gupta5667@gmail.com'
                    className='bg-yellow-300 hover:tracking-wide'
                >
                    nikhil.gupta5667@gmail.com
                </a>
                <div className='relative h-96 w-96 ml-auto'>
                    <Image src='/assets/hello.svg' alt='hello' layout='fill' />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
