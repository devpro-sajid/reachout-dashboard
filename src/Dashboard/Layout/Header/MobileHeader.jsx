import { useContext, useState } from 'react';
import { ToggleContext } from '../../../Providers/ToggleState';
import { NavLink } from 'react-router-dom';
import UpgradeBadge from '../AccountUpgrade/UpgradeBadge';

const MobileHeader = () => {
    const { activeRoute, setRouteName } = useContext(ToggleContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileNav = [

        {
            id: 1,
            link: 'myjobs',
            iconLink: '/DashboardIcon/myjobs.png',
            text: "My Jobs",
        },
        {
            id: 2,
            link: '/',
            iconLink: '/DashboardIcon/dashboardicon.png',
            text: "Dashboard",
        },
        {
            id: 3,
            link: 'candidate-reachout',
            iconLink: '/DashboardIcon/candidatereach.png',
            text: "Candidate R3achout",
        },
        {
            id: 4,
            link: 'search-assistant',
            iconLink: '/DashboardIcon/searchassist.png',
            text: "Search Assistant",
        },
        {
            id: 5,
            link: 'interview',
            iconLink: '/DashboardIcon/interviewicon.png',
            text: "Interview",
        },
        {
            id: 6,
            link: 'intake',
            iconLink: '/DashboardIcon/intakeicon.png',
            text: "Intake",
        },
        {
            id: 7,
            link: 'job-description',
            iconLink: '/DashboardIcon/descicon.png',
            text: "Job Description",
        },


    ];
    return (
        <>
            <div className='bg-[#FEFEFE] py-[17px] px-5 flex md:hidden justify-between items-center sticky top-0 z-50'>
                <div className='flex space-x-2 items-center'>
                    <img src="/DashboardIcon/candidatereach.png" alt="" />
                    <h2 className='text-[12px] font-semibold'>{activeRoute}</h2>
                </div>


                <div className='flex items-center space-x-2'>

                    <img className=' p-2 h-8 cursor-pointer bg-[#E7EEF5] rounded-full' src="/DashboardIcon/starreach.png" alt="" />
                    <img className='p-2 h-8 cursor-pointer  bg-[#E7EEF5] rounded-full ' src="/DashboardIcon/reachnotification.png" alt="" />

                    <div className='border-l border-color pl-2 space-x-2 flex items-center'>
                        <img className='h-8 cursor-pointer' src="/DashboardIcon/userimage.png" alt="" />
                        <img onClick={() => setIsMenuOpen(true)} className='cursor-pointer' src="/DashboardIcon/menuhamburger.png" alt="" />
                    </div>

                </div>


                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-primary-100 border rounded shadow-md '>
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <NavLink
                                        to='/'
                                        aria-label='ReachOut'
                                        title='ReachOut'
                                        className={`${({ isActive }) => (isActive ? 'active' : '')}inline-flex items-center`}
                                    >
                                        <div className='flex items-center justify-center bg-primary-100'>
                                            <img src="DashboardIcon/reachlogo.png" alt="" />
                                        </div>
                                    </NavLink>
                                </div>
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline bg-primary-100'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <img src="/DashboardIcon/hamburgerclose.png" alt="" />
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className='space-y-4'>
                                    <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/create-job' className='primary-button flex items-center mt-2 ml-1 transition-all duration-300 left-4 bottom-4 mr-1'
                                    >
                                        <h2
                                            className='text-[14px] text-brown whitespace-pre pl-4'
                                        >
                                            Create New Job
                                        </h2>
                                        <img className="md:ml-2 lg:ml-5 ml-2" src='/DashboardIcon/createjobicon.png' alt="" />
                                    </NavLink>
                                    {
                                        mobileNav?.map(data => {
                                            return (
                                                <li onClick={() => setIsMenuOpen(!isMenuOpen)} key={data.id}>
                                                    <NavLink onClick={() => setRouteName(data.text)} to={data.link}
                                                        className={`${({ isActive }) => (isActive ? 'active' : '')} sidebar-menu-item mr-1`}>
                                                        <img className="md:mr-2 lg:mr-5 mr-2" src={data.iconLink} alt="" />
                                                        <div
                                                            className='text-[14px] desc-color whitespace-pre'
                                                        >
                                                            {data.text}
                                                        </div>
                                                    </NavLink>
                                                </li>

                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                            <div className='mt-24'>
                                <UpgradeBadge></UpgradeBadge>
                            </div>
                        </div>
                    </div>
                )}
            </div>



        </>

    );
};

export default MobileHeader;