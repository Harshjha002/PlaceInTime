import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";

const MainNavigation = () => {
    const [DrawerIsOpen, setDrawerIsOpen] = useState(false);

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <>
            {DrawerIsOpen && <Backdrop onClick={() => closeDrawer()} />}
            <SideDrawer show={DrawerIsOpen} onclick={closeDrawer}>
                <nav className="p-4">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <div className="flex items-center justify-between px-4 py-3">
                    <Link to="/" className="text-center">
                        <h1 className="text-2xl font-bold text-indigo-700">PlaceInTime</h1>
                        <p className="text-xs text-gray-500">
                            Your journey. Your moments. Your PlaceInTime.
                        </p>
                    </Link>

                    <button
                        className="md:hidden text-indigo-700 font-semibold text-xl"
                        onClick={() => setDrawerIsOpen((prev) => !prev)}
                    >
                        {DrawerIsOpen ? <ImCross /> : <GiHamburgerMenu />}
                    </button>

                    <nav className="hidden md:block">
                        <NavLinks />
                    </nav>
                </div>
            </MainHeader>
        </>
    );
};

export default MainNavigation;
