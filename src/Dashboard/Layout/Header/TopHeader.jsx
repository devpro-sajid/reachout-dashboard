import { useContext } from 'react';
import { ToggleContext } from '../../../Providers/ToggleState';

const TopHeader = () => {
    const { activeRoute } = useContext(ToggleContext);
    return (
        <div className='bg-primary-100 py-[17px] pr-5 pl-10 hidden md:flex justify-between items-center'>
            <div>
                <h2 className='primary-heading font-semibold'>{activeRoute}</h2>
            </div>


            <div className='flex items-center space-x-5'>

                <img className='p-3 cursor-pointer bg-primary-300 rounded-full' src="/DashboardIcon/starreach.png" alt="" />
                <img className='p-3 cursor-pointer  bg-primary-300 rounded-full ' src="/DashboardIcon/reachnotification.png" alt="" />

                <div className='border-l border-color pl-5 space-x-5 flex items-center cursor-pointer'>
                    <div className='flex items-center space-x-2'>
                        <img className='' src="/DashboardIcon/userimage.png" alt="" />
                        <div>
                            <h4 className='font-semibold primary-color'>Malida Lyne</h4>
                            <p className='desc-size desc-color'>Recruiter</p>
                        </div> 
                    </div>
                    <img src="/DashboardIcon/profilearrow.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default TopHeader;