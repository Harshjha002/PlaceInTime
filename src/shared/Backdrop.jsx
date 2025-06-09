import ReactDOM from "react-dom";

const Backdrop = ({ onClick }) => {
    const portalElement = document.getElementById("backdrop");

    if (!portalElement) return null;

    return ReactDOM.createPortal(
        <div
            onClick={onClick}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm "
        />,
        portalElement
    );
};

export default Backdrop;
