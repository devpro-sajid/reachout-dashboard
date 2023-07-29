import { useContext } from "react";
import { ToggleContext } from "../../Providers/ToggleState";
import Sidebar from "./Sidebar/Sidebar";
import TopHeader from "./Header/TopHeader";
import { Outlet } from "react-router-dom";
import MobileHeader from "./Header/MobileHeader";


const DashboardLayout = () => {
    const { toggle } = useContext(ToggleContext)
    return (
        <div className='sm:flex'>
            <Sidebar></Sidebar>
            <div className={`${toggle ? 'lg:w-[92%] w-full' : ' md:w-[72%] lg:w-[80%] w-full'}`}>
                <TopHeader></TopHeader>
                <MobileHeader></MobileHeader>
                <div className="p-6 ">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;