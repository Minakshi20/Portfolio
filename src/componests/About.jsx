import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import {motion} from 'framer-motion';
 import { fadeIn } from './variants';
const  About = () => {
    return (
         <div  className="bg-emerald-300 md:px-14 p-4 max-w-s mx-auto space-y-10" id='about'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                       <motion.div variants={fadeIn("right", 0.5)}
                           initial="hidden"
                          whileInView={"show"}
                          viewport={{once:false, amount: 0.5}} className='md:w-1/2'>
                           <img src={About1} alt="" />
                 
                         </motion.div>

                       <div className='md-w-2/5'>
                           <h2 className='md:text-5xl text-3xl font-blod  text-primary mb-5 leading-normal'>Frontend  
                            <span className='text-secondary'> Development</span></h2>
                              <p className='text-tartiry text-lg mb-7 space-y-3'>Developing responsive User Interface using designing tools and frameworks</p>
                             <p className=' text-tartiry text-lg mb-7 space-y-3'> Experience of working with CSS3 and CSS preprocessors</p>
                               <p className=' text-tartiry text-lg mb-7 space-y-3'> Experience to develop complex design structures</p>
                    
                        </div>
            
 

            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div className='md:w-1/2' variants={fadeIn("left", 0.5)}
                initial="hidden"
                 whileInView={"show"}
                     viewport={{once:false, amount: 0.5}}>
                 <img src={About2} alt="" />

                 
             </motion.div>

                <div className='md-w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-blod  text-primary mb-5 leading-normal'>Backend Backend & 
                    <span className='text-secondary'> Version Control</span></h2>
                    <p className='text-tartiry text-lg mb-7 space-y-3'>Experience working on multiple backend technologies </p>
                    <p className='text-tartiry text-lg mb-7 space-y-3'>Hosting and maintaining websites on virtual machine instances along with integration of databases </p>
                    <p className='text-tartiry text-lg mb-7 space-y-3'>Experience to develop application using node.js with MongoDB and Express.js</p>
                    
                </div>



            </div>
         

         </div>
    );
} ;

export default About;