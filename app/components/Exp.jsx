import Image from 'next/image';
import React from 'react';

const Exp = () => {
    const expricenes = [
        { name: "Node Js", points: 89 },
        { name: "HTML", points: 70 },
        { name: "CSS", points: 75 },
        { name: "Boot Strap", points: 80 },
        { name: "Discord Js", points: 87 },
        { name: "Mongo Db", points: 92 },
        { name: "ejs", points: 88 },
    ];

    return (
        <div className='my-20'>
            <div className='m-6 w-fit mx-auto justify-center text-center'>
                <h4 className='text-white text-4xl sm:text-5xl md:text-6xl font-bold'>Expertise</h4>
                <div className='w-full border-t-primary mt-5 border-t-2'></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Left Column - Image */}
                <div className='col-span-1 sm:col-span-1 lg:col-span-1'>
                    <Image
                        layout='responsive'
                        className='rounded-bl-[80] border-primary border-8 rounded-tr-[80] m-5'
                        alt='programming'
                        width={200}
                        height={300}
                        src='/prgram.png'
                    />
                </div>

                {/* Middle Column - Progress Bars */}
                <div className='col-span-1 sm:col-span-1 lg:col-span-1'>
                    <div className="w-full max-w-sm mx-auto mt-10">
                        {/* Progress Bars for items 4 to 7 */}
                        {expricenes.slice(4, 8).map((item, index) => (
                            <div key={index} className="relative pt-1 mb-4">
                                <div className="flex mb-2 text-white items-center justify-between">
                                    <span className="text-3xl font-lalezar">{item.name}</span>
                                    <span className="text-3xl font-lalezar">{item.points}%</span>
                                </div>
                                {/* Actual Progress Bar */}
                                <div className="flex mb-2">
                                    <div className="w-full bg-gray-300 rounded-full h-8">
                                        <div
                                            className="bg-primary h-8 rounded-full"
                                            style={{ width: `${item.points}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Progress Bars */}
                <div className='col-span-1 sm:col-span-1 lg:col-span-1'>
                    <div className="w-full max-w-sm mx-auto md:mt-10">
                        {/* Progress Bars for items 0 to 3 */}
                        {expricenes.slice(0, 4).map((item, index) => (
                            <div key={index} className="relative pt-1 mb-4">
                                <div className="flex mb-2 text-white items-center justify-between">
                                    <span className="text-3xl font-lalezar">{item.name}</span>
                                    <span className="text-3xl font-lalezar">{item.points}%</span>
                                </div>
                                {/* Actual Progress Bar */}
                                <div className="flex mb-2">
                                    <div className="w-full bg-gray-300 rounded-full h-8">
                                        <div
                                            className="bg-primary h-8 rounded-full"
                                            style={{ width: `${item.points}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exp;
