import { useState } from 'react';
import pink from '../assets/pink.png'
import { GrLanguage } from "react-icons/gr";
import {FaBars, FaXmark} from 'react-icons/fa6';

import {Link} from 'react-scroll'


 const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}

const navItems = [
  { link: 'Home', path: 'home', name: 'Home' },
  { link: 'Feature', path: 'feature', name: 'Feature' },
  { link: 'About', path: 'about', name: 'About' },
  { link: 'Education', path: 'education', name: 'Education' },
  {link:'Contact', path: 'contact', name: 'Contact'},
]
 

return (
  <>
      <nav className='bg-white md:px-14 p-4 max-w-sceen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font medium'>
           <div className='flex space-x-14 items-center image-rotation'>
                  <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                    <img src={pink} alt='' className='w-15 inline-block items-center'/>
                  <spna>XYZ</spna>
                  </a>
                <ul className='md:flex space-x-12 hidden'>
                {
                    navItems.map(({ link, path }) => <Link spy={true} snooth={true} offset={-100} activeClass='active' key={link} to={path} 
                    className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
                }
                </ul>

           </div>

           <div className='space-x-12 hidden md:flex item-center'>
            <Link href='/' className='hidden lg-flex items-center hover:text-secondary'><GrLanguage className='mr-2'/><span>Language</span></Link>
            <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
           </div>

           <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white fouce:outline-none fouce:text-grey-300'>
              {
                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary text-lg'/>)
              }

            </button>
           </div>

        </div>
      </nav>

      <div className={`space-y-4 px-4 pt-24 pb-5 text-xl bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
  {
    navItems.map(({ link, path }) => <Link spy={true} snooth={true} offset={-80} activeClass='active' key={link} to={path} className='block hover:text-gray-300 text-white' onClick={toggleMenu}>{link}</Link>)
  }
</div>

  </>    
   );

};

export default Navbar;