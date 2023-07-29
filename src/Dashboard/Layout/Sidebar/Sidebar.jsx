import { useContext } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { ToggleContext } from "../../../Providers/ToggleState";
import SidebarMenuItem from "./SidebarMenuItem";


const Sidebar = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <div className={`${toggle ? "lg:w-[8%] sidebar-contain-toggle" : "sidebar-container"} hidden md:block bg-primary-100`}>
            <div className='flex items-center py-6 px-8 border-b border-b-[#EFF4FA] mb-6'>
                <img className={`${toggle ? "hidden" : "block"}`} src="/DashboardIcon/reachlogo.png" alt="" />
                <img className={`${toggle ? "block h-[34px]" : "hidden"}`} src="/DashboardIcon/candidatereach.png" alt="" />
            </div>
            <SidebarMenuItem toggle={toggle} />
            
            <div
                className="absolute top-5 flex justify-center items-center -right-4 w-10 h-10 border  rounded-md cursor-pointer"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <BiChevronLeft
                    className={`${toggle ? "rotate-180" : ""
                        } text-3xl transition-all duration-300 bg-prime rounded-full hidden sm:block text-gray-300`}
                />
            </div>
        </div>
    );
};

export default Sidebar;