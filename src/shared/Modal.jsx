import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
    show,
    onCancel,
    header,
    footer,
    onSubmit,
    children,
    className = "",
    headerClass = "",
    contentClass = "",
    footerClass = "",
    style = {},
}) => {
    const portalElement = document.getElementById("modal-hook");
    if (!portalElement) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[22vh] bg-black/30 backdrop-blur-sm"
                    onClick={onCancel}
                >
                    <motion.div
                        initial={{ y: -60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -60, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`w-[90%] max-w-[40rem] bg-white rounded-2xl shadow-2xl border border-purple-200 ${className}`}
                        style={style}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header
                            className={`bg-gradient-to-r from-purple-800 to-purple-600 text-white py-4 px-6 rounded-t-2xl ${headerClass}`}
                        >
                            <h2 className="text-xl font-bold tracking-wide">{header}</h2>
                        </header>
                        <form onSubmit={onSubmit ?? ((e) => e.preventDefault())}>
                            <div className={`p-6 text-gray-700 ${contentClass}`}>{children}</div>
                            <footer className={`px-6 py-4 bg-gray-50 rounded-b-2xl ${footerClass}`}>
                                {footer}
                            </footer>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        portalElement
    );
};

export default Modal;
