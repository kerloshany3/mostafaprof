import Image from 'next/image';
import React from 'react';

const Projects = () => {
    return (
        <div className='flex justify-center m-auto p-5'>
            <div className='w-full max-w-7xl'>
                <div className='m-6 w-fit mx-auto justify-center  hover:bg-primary transition  text-center'>
                    <h4 className='text-white text-4xl   hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>My Projects</h4>
                    <div className='w-full border-t-primary mt-5 border-t-2'></div>
                </div>
                <p className='text-white text-xl sm:text-2xl md:text-3xl font-bold m-auto text-center mb-6'>
                    Some of the projects I worked on during my work period. You can see detailed pictures of them and contact us for more details.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='relative mt-4'>
                        <Image
                            className='rounded-xl border-primary border-8'
                            width={400}
                            height={400}
                            alt='project'
                            src='/ex.jpg'
                        />
                        <button className='absolute -bottom-8 right-5 left-5 w-fit my-2 flex justify-center m-auto bg-primary font-bold p-2 rounded-xl text-xl sm:text-2xl'>
                            Show More
                        </button>
                    </div>
                    <div className='mt-4 relative'>
                        <Image
                            className='rounded-xl border-primary border-8'
                            width={400}
                            height={400}
                            alt='project'
                            src='/ex.jpg'
                        />
                        <button className='absolute -bottom-8 right-5 left-5 w-fit my-2 flex justify-center m-auto bg-primary font-bold p-2 rounded-xl text-xl sm:text-2xl'>
                            Show More
                        </button>
                    </div>
                    {/* Add more project images here */}
                    <div className=' mt-4 relative'>
                        <Image
                            className='rounded-xl border-primary border-8'
                            width={400}
                            height={400}
                            alt='project'
                            src='/ex.jpg'
                        />
                        <button className='absolute -bottom-8 right-5 left-5 w-fit my-2 flex justify-center m-auto bg-primary font-bold p-2 rounded-xl text-xl sm:text-2xl'>
                            Show More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
