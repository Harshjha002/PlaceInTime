import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => {
    const content = (
        <div
            onClick={onClick}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        ></div>
    );

    return ReactDOM.createPortal(content, document.getElementById('backdrop'));
};

export default Backdrop;
