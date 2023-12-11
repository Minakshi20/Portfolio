import {motion} from 'framer-motion';
import { fadeIn } from './variants';
import card from '../assets/card.png';

import certificate from '../assets/certificate.jpeg'

const Education = () => {

    return ( 
     
           <>
       

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 space-x-10 md:px-16 p-4 max-w-s mx-auto space-y-10' id='education'>
                 <motion.div className='md:w-2/5'
                   variants={fadeIn("right", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                     viewport={{once:false, amount: 0.7}} >
                       <div className='bg-[rgba(255, 255, 255, 0.07)] rounded-[360px] shadow-2xl p-4.5 items-center flex justify-center hover:-translate-y-4 transition-all
                           duration-300 cursor-pointer md:mt-16 ' style={{ height: '300px', width: '57.80%' }}>
                            <div>
                               <img src={card} alt="" />
                            </div>
            
                        </div>
                </motion.div>

                <div className='md-w-2/5 space-x-40'>
                    <h2 className='md:text-5xl text-3xl font-blod  text-primary mb-5 leading-normal'>Education</h2>
                    <p className='md:text-3xl text-3xl md-5 leading-normal'>BE in Computer Science and <span className='text-secondary leading-normal items-center'>Engineering</span></p>
                    <p className='md:text-3xl text-3xl md-5 leading-normal'>Graduate - 2022</p>
                </div>
            </div>


                 <div className='text-black justify-between items-center space-x-50 space-y-20'>
                    <h1 className='text-5xl font-bold text-center'>
                        Certification
                       </h1>
                </div>

                <div className="w-full lg:w-3/4 my-24 md:px-14 px-4 max-w-screen-2xl mx-auto space-y-10">

                     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-24 gap-8 items-start'>

                         <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl p-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div className="flex flex-col items-center justify-center">
                                  <img src={certificate} alt="" />
                                  <h2 className='text-2xl font-semibold text-secondary mt-3 text-center'>Python</h2>
                                 <p className='text-2xl text-primary mt-3 text-center'>The Python Programming Comprehensive Bootcamp</p>
                            </div>
                         </div>

                            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl p-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                                <div className="flex flex-col items-center justify-center">
                                 <img src={certificate} alt="" />
                                <h2 className='text-2xl font-semibold text-secondary mt-5 text-center'>Data Science</h2>
                                 <p className='text-2xl text-primary mt-3 text-center'>[2021] Microsoft Power BI Certification: A-Z Level (Ver 7.3)</p>
                                 </div>
                    
                            </div>


                            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl p-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                                 <div className="flex flex-col items-center justify-center">
                                  <img src={certificate} alt="" />
                                  <h2 className='text-2xl font-semibold text-secondary mt-3 text-center'>Web Development</h2>
                                 <p className='text-2xl text-primary mt-3 text-center'>Full stack web Development Certification by Udemy </p>
                                </div>
                             </div>
                       
                        </div>
                        
                    </div>
               

            
           
          </>





    );


};

export default Education;
