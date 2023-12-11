import img1 from '../assets/img1.png'
import code from '../assets/code.jpg'
import data from '../assets/data.jpg'

const Feature = () => {
    return(

       <div className="my-24 md:px-14  px-4 max-w-screen-2xl mx-auto space-y-10" id='feature'>

        <div className="flex flex-col lg:flex-row justify-betwwen  items-start gap-10">
           
            <div className="lg:w-1/4">
               <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">What I do</h3>
               <p className="text-base text-tartiary">Create a responsive front end and Backend project with the help of techonology to experince the feeling</p>
            </div>

          {/* feture cards*/}

          <div className="w-full lg:w-3/4">

           <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
           
           <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all
            duration-300 cursor-pointer'>
                <div>
                  <img src={img1} alt="" />
                  <h2 className='text-2xl font-semiblod text-secondary px-2 text-center mt-3'>Design & Framework</h2>
                  <p className='text-1xl font text-primary px-2 text-center mt-3'> Crafting user-centric web solutions, passionate about efficient and innovative coding for seamless digital experiences..</p>
                </div>
            </div>
          

          <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all
            duration-300 cursor-pointer md:mt-16'>
                <div>
                  <img src={code} alt="" />
                  <h2 className='text-2xl font-semiblod text-secondary px-5 text-center mt-5'>Codding</h2>
                  <p className='text-1xl font text-primary px-2 text-center mt-3'>The software developer proficient in Java, Python, & JavaScript, crafting innovative solutions</p>
                </div>
            
          </div>

          <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center  hover:-translate-y-4 transition-all
            duration-300 cursor-pointer'>
                <div>
                  <img src={data} alt="" style={{ height: '150px', width: '250px' }} className='items-center flex justify-center' />
                  <h2 className='text-2xl font-semiblod text-secondary px-5 text-center mt-5' >Data Analyst</h2>
                  <p className='text-1xl font text-primary px-2 text-center mt-3'>Data Analyst skilled in extracting insights from data, guiding strategic decisions through comprehensive analysis.</p>
                </div> 
           </div>

          </div>
          </div>
        </div>
       </div>


    );
};

export default Feature;