import { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import Flag from '../../assets/video/flag.webm'
import SecondLogo from '../../assets/images/2nd_logo.webp'

function NavSecond() {
    const [count, setCount] = useState(0); 
  return (
    <div>
      <div className='w-full h-38 bg-white flex items-center justify-between px-4'>
        <div className='flex items-center ml-10 w-[50%]'>
          <a href="#"><img src={Logo} alt="Logo" /></a>
        </div>
                
      </div>
    </div>
  );

}
export default NavSecond