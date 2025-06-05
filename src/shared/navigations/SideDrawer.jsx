
import ReactDom from 'react-dom'

const SideDrawer = ({ children, show, onclick }) => {

    const content = <aside
        onClick={onclick}
        className={`fixed top-0 left-0 w-3/4 max-w-xs h-full z-40 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${show ? 'translate-x-0' : '-translate-x-full'
            } md:hidden`}
    >
        {children}
    </aside>


    return ReactDom.createPortal(content, document.getElementById("drawer"))

};

export default SideDrawer;
