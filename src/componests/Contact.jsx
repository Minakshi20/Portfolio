import {motion} from 'framer-motion';
 import { fadeIn } from './variants';
import banner from '../assets/banner.png'
const Contact = () => {
    return(
<div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id='contact'>
     <div className='gradientBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9 md-20'>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
    
                 <motion.div  
                      variants={fadeIn("left", 0.5)}
                     initial="hidden"
                     whileInView={"show"}
                    viewport={{once:false, amount: 0.7}}
                >
                       <img src={banner} alt="" className='lg-h[360]'/>
                 </motion.div>

        
            
                    <motion.div 
                      variants={fadeIn("right", 0.7)}
                     initial="hidden"
                       whileInView={"show"}
                       viewport={{once:false, amount: 0.7}}
                    className="md-w-3/5">
                      <h2 className='md-text-7xl text-4xl font-blod text-white md-6 leading-relaxed' >Minakshi Sontakke</h2>
                         <p className='text-[#EBEBEB] text-2xl'>{"Software creation is the art of crafting ideas into code, where innovation meets functionality, and imagination brings digital realms to life."}</p>
                    <div className='space-x-5 space-y-4'>
                      <p className=' text-2xl'>Email id:- minakshisontakke20@gmail.com</p>
                      </div>
                     </motion.div>
            
        
        </div>
    </div>
</div>
    );
};

export default Contact;