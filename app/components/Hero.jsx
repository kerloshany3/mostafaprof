import Image from 'next/image'
import React from 'react'
import { MdCloudDownload } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {


    return (
        <div>
            <div className=' cursor-default select-none grid-cols-1  grid md:grid-cols-2'>

                <div className="p-5 md:p-9 w-full h-full flex justify-center rounded-tr-[100px] md:rounded-tr-[200px] rounded-bl-[100px] md:rounded-bl-[200px] bg-primary">
                    <div className="relative  w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                        <Image
                            className="rounded-3xl scale-90 "
                            width={400}
                            height={400}
                            alt="profile picture"
                            src="/prof.jpg"
                            layout="responsive"
                        />
                        <div className="absolute right-0 bottom-5">
                            <h3 className="bg-white text-lg sm:text-xl md:text-3xl font-lalezar text-primary2 rounded-bl-2xl rounded-tr-2xl p-2 text-center">
                                Mostafa Ayman
                            </h3>
                        </div>
                    </div>
                </div>


                <div className='relative items-center flex text-7xl'>

                    <div className='  p-10'>
                        <div className=' md:hidden  top-1 place-items-center gap-4 flex right-5'>

                            <div className='  m-6 text-4xl text-primary flex gap-3'>

                                <FaFacebook></FaFacebook>

                                <GrInstagram />
                                <FaXTwitter />


                            </div>
                            <button className='  flex gap-2 place-items-center bg-primary text-primary2 text-2xl p-2 font-bold rounded-bl-2xl  rounded-tr-2xl '>
                                contact
                                <TbMessageFilled /></button>
                        </div>
                        <div className=' hidden absolute md:block   top-1 place-items-center gap-4  right-5'>

                            <div className=' place-items-center  m-6 text-4xl text-primary flex gap-3'>

                                <FaFacebook></FaFacebook>

                                <GrInstagram />
                                <FaXTwitter />
                                <button className='  flex gap-2 place-items-center bg-primary text-primary2 text-2xl p-2 font-bold rounded-bl-2xl  rounded-tr-2xl '>
                                    contact
                                    <TbMessageFilled /></button>

                            </div>

                        </div>

                        <h3 className=' font-bold text-white' >i'm <span className=' text-primary font-bold'> SASA  </span> </h3>
                        <h3 className=' text-white font-extrabold'>Web developer</h3>
                        <h3 className=' text-primary text-3xl flex pl-8 p-5 font-lalezar'>I'm a back-end Developer</h3>

                        <div className=' w-full h-1 border-t-2 rounded-xl border-primary'></div>


                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
                                {/* Read More Button */}
                                <button className="font-bold flex items-center justify-center gap-2 text-primary2 bg-white rounded-full px-5 py-2 w-full  text-sm sm:text-base md:text-lg">
                                    <MdCloudDownload />
                                    Read More
                                </button>

                                {/* My CV Button */}
                                <button className="font-bold flex items-center justify-center gap-3 text-primary2 bg-white rounded-full px-5 py-2 w-full  text-sm sm:text-base md:text-lg">
                                    <FaFileAlt />
                                    My CV
                                </button>
                            </div>

                        

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero