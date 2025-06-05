import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 px-4 py-6 md:py-0 md:gap-8 text-sm font-medium">
            <li>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        `relative px-2 py-1 transition-colors ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
                        }`
                    }
                >
                    All Users
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/u1/dashboard"
                    className={({ isActive }) =>
                        `relative px-2 py-1 transition-colors ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
                        }`
                    }
                >
                    Dashboard
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/places/new"
                    className={({ isActive }) =>
                        `relative px-2 py-1 transition-colors ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
                        }`
                    }
                >
                    Add Place
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/auth"
                    className={({ isActive }) =>
                        `inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md ${isActive
                            ? 'bg-indigo-600 text-white'
                            : 'bg-indigo-500 text-white hover:bg-indigo-600'
                        }`
                    }
                >
                    Get Started
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
