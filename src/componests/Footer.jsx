import {Link} from 'react-scroll'


const footerItems = [
  { link: 'Home', path: 'home', name: 'Home' },
  { link: 'Feature', path: 'feature', name: 'Feature' },
  { link: 'About', path: 'about', name: 'About' },
  { link: 'Education', path: 'education', name: 'Education' },
  {link:'Contact', path: 'contact', name: 'Contact'},
];

const Footer = () => {
  return (
    <footer className="bg-orange-300 md:px-14 flex w-full flex-row flex-wrap items-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6  md:justify-between">
      <p  className="md:text-3xl text-3xl font-blod  text-primary mb-5 leading-normal">
           &copy; 2023  Minakshi
      </p>

      {
                    footerItems.map(({ link, path }) => <Link spy={true} snooth={true} offset={-100} activeClass='active' key={link} to={path} 
                    className='block hover:text-gray-300 cursor-pointer bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>{link}</Link>)
      }    
     
    </footer>
  );
}

export default  Footer;