import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ToggleContext } from "../../../Providers/ToggleState";
import UpgradeBadge from "../AccountUpgrade/UpgradeBadge";

const SidebarMenuItem = ({ toggle }) => {
    const { setRouteName } = useContext(ToggleContext)
    const sidebarNav = [

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
            <div className="px-4">
                <NavLink to='/create-job' className={`${toggle ? "w-[3.6rem]" : "w-full"
                    } primary-button flex items-center mt-2 ml-1 transition-all duration-300 left-4 bottom-4`}
                >
                    <h2
                        className={`${toggle ? "hidden delay-200" : ""
                            } desc-size text-brown whitespace-pre pl-4 `}
                    >
                        Create New Job
                    </h2>
                    <img className={`${toggle ? "" : "md:ml-2 lg:ml-5 ml-2"}`} src='/DashboardIcon/createjobicon.png' alt="" />
                </NavLink>
                {sidebarNav.map((data) => {
                    return (
                        <NavLink onClick={() => setRouteName(data.text)} to={`${data.link}`}
                            className={`${toggle ? "w-[3.6rem]" : "w-full"
                                } ${({ isActive }) => (isActive ? 'active' : '')} sidebar-menu-item left-4 bottom-4`}
                            key={data.id}
                        >
                            <img className={`${toggle ? "" : "md:mr-2 lg:mr-5 mr-2"}
                                `} src={data.iconLink} alt="" />
                            <div
                                className={`${toggle ? "opacity-0 delay-200" : ""
                                    } desc-size desc-color whitespace-pre`}
                            >
                                {data.text}
                            </div>
                        </NavLink>
                    );
                })}
                <div className={`${toggle?'hidden':'block'} mt-24`}>
                    <UpgradeBadge></UpgradeBadge>
                </div>

            </div>

        </>
    );
};

export default SidebarMenuItem;