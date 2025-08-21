import { FaAngleRight } from 'react-icons/fa'
function OtherSideBar() {
    return (
        <div>
            <div>
                <div>
                        <span className="text-2xl font-semibold  rounded-t-2xl text-white py-1 px-1.5 mb-[1px] bg-gray-700">Catagories</span>
                    </div>
                    <div className='h-[4px] w-full bg-gray-700'></div>
            </div>
            <div>
                <ul>
                    <li className='mb-2 mt-1'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>BRAKE</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>FOOD</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>GADGETS</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>I-PAD</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>MOBILE</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>NEWS</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>SPORTS</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>TECHNOLOGY</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>VIDEO</a></li>
                    <li className='mb-2'><a href="#" className='flex gap-2'><div className='left-0 top-1 relative'><FaAngleRight /></div>OTHER</a></li>
                </ul>
            </div>
        </div>
    )
}

export default OtherSideBar;