import React from 'react';
import { FaPencilRuler } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

export default function Working() {
    return (
        <section id="working">
            <h1 className='heading-1'>Our <span className='text-primary'>Working Process</span></h1>
            <div className='bg-primary/40 rounded-lg p-8 mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center sm:npjustify-between'>
                <div className='bg-white rounded-lg p-4 max-w-[16rem] hover:scale-105 hover:shadow-md transition-all duration-200'>
                    <FaPencilRuler className='text-5xl text-primary ml-2 mt-2 mb-6' />
                    <p className='text-primary uppercase font-semibold'>Design Consultation</p>
                    <p className='mt-2 text-sm'>Tailored advice from industry experts for your ideal bathroom design.</p>
                </div>
                <div className='bg-white rounded-lg p-4 max-w-[16rem] hover:scale-105 hover:shadow-md transition-all duration-200'>
                    <MdTouchApp className='text-5xl text-primary ml-2 mt-2 mb-6' />
                    <p className='text-primary uppercase font-semibold'>Pick Your Style</p>
                    <p className='mt-2 text-sm'>Explore our wide range of styles to discover the perfect fit for your dream bathroom.</p>
                </div>
                <div className='bg-white rounded-lg p-4 max-w-[16rem] hover:scale-105 hover:shadow-md transition-all duration-200'>
                    <svg className='fill-primary ml-2 mt-2 mb-6' height="3rem" width="3rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.139 353.139">
                        <g>
                            <path d="M176.57,200.676c24.125,0,80.846-29.034,80.846-98.603c0-49.095-5.984-89.802-61.013-97.344V1.308 c-13.196-1.744-26.47-1.744-39.666,0V4.73c-55.029,7.542-61.013,48.249-61.013,97.344 C95.723,171.642,152.445,200.676,176.57,200.676z M196.403,16.616c3.487,0.532,6.669,1.201,9.564,1.985l-4.723,42.271h-4.842 V16.616z M156.737,16.616v44.256h-4.842l-4.723-42.271C150.068,17.816,153.25,17.148,156.737,16.616z M107.846,84.593l0.775-0.448 l0.392,2.081c1.653,8.789,5.828,21.386,9.931,21.879c23.519,2.82,40.753,4.025,57.626,4.025s34.107-1.205,57.625-4.025 c4.107-0.494,8.28-13.09,9.931-21.878l0.391-2.083l0.775,0.449c0.271,5.765,0.354,11.635,0.354,17.481 c0,34.005-15.015,55.075-27.612,66.762c-15.872,14.727-33.494,20.072-41.466,20.072c-7.972,0-25.594-5.345-41.466-20.072 c-12.597-11.687-27.612-32.757-27.612-66.762C107.492,96.228,107.575,90.358,107.846,84.593z" />
                            <path d="M326.662,301.799c-4.127-25.665-12.624-58.724-29.667-70.472c-11.638-8.024-52.243-29.718-69.582-38.981l-0.3-0.16 c-1.982-1.06-4.403-0.846-6.17,0.541c-9.083,7.131-19.033,11.937-29.573,14.284c-1.862,0.415-3.39,1.738-4.067,3.521 l-10.733,28.291l-10.733-28.291c-0.677-1.783-2.205-3.106-4.067-3.521c-10.54-2.347-20.49-7.153-29.573-14.284 c-1.768-1.388-4.189-1.601-6.17-0.541c-17.133,9.155-58.235,31.292-69.831,39.107c-19.619,13.217-28.198,61.052-29.718,70.507 c-0.151,0.938-0.064,1.897,0.253,2.792c0.702,1.982,18.708,48.548,149.839,48.548c131.131,0,149.137-46.566,149.839-48.548 C326.725,303.696,326.813,302.736,326.662,301.799z M259.43,335.474c-20.077,5.113-46.949,8.704-82.865,8.704 c-35.918,0-62.787-3.591-82.867-8.704c6.136-52.384,0.311-97.785-2.797-116.367c3.126-1.735,6.313-3.487,9.479-5.223 c11.773,31.122,13.855,70.533,13.855,70.533h56.999h10.662h56.997c0,0,2.085-39.447,13.874-70.575 c3.163,1.728,6.347,3.474,9.472,5.202C259.133,237.589,253.287,283.032,259.43,335.474z" />
                        </g>
                    </svg>
                    <p className='text-primary uppercase font-semibold'>Installation</p>
                    <p className='mt-2 text-sm'>Our skilled team ensures hassle-free installation, completing it with precision and efficiency.</p>
                </div>
                <div className='bg-white rounded-lg p-4 max-w-[16rem] hover:scale-105 hover:shadow-md transition-all duration-200'>
                    <PiHandshake className='text-5xl text-primary ml-2 mt-2 mb-6' />
                    <p className='text-primary uppercase font-semibold'>Warranty Service</p>
                    <p className='mt-2 text-sm'>Rest easy knowing our comprehensive warranty ensures lasting quality and support.</p>
                </div>
            </div>
        </section>
    )
}