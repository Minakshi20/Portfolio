import {motion} from 'framer-motion';
 import { fadeIn } from './variants';
import girl from '../assets/girl.jpg'
const Home = () => {
    return(
<div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id='home'>
     <div className='gradientBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9 md-20'>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
    
      <motion.div  
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.7}}
      >
        <img src={girl} alt="" className='lg-h[360]'/>
      </motion.div>

        
            
            <motion.div 
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
            className="md-w-3/5">
                <h2 className='md-text-7xl text-4xl font-blod text-white md-6 leading-relaxed' >Minakshi Sontakke</h2>
                <p className='text-[#EBEBEB] text-2xl'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
            <div className='space-x-5 space-y-4'>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started <a href="/about"></a></button>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>About <a href="feature"></a></button>
            </div>
            </motion.div>
            
        
     </div>
    </div>
</div>
    );
};

export default Home;