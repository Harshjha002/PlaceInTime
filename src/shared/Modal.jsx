import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
    show,
    onCancel,
    header,
    footer,
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
                    key="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={onCancel}
                >
                    <motion.div
                        key="modal-content"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`relative w-[92%] max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-purple-300 ${className}`}
                        style={style}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <header
                            className={`flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-t-3xl ${headerClass}`}
                        >
                            <h2 className="text-xl font-semibold tracking-wide">{header}</h2>
                            <button
                                onClick={onCancel}
                                className="text-white/80 hover:text-white text-xl font-bold focus:outline-none"
                                aria-label="Close modal"
                            >
                                &times;
                            </button>
                        </header>

                        <div className={`p-6 text-gray-800 space-y-4 ${contentClass}`}>
                            {children}
                        </div>

                        {/* Footer */}
                        <footer
                            className={`flex justify-end gap-4 px-6 py-4 bg-gray-100 rounded-b-3xl ${footerClass}`}
                        >
                            {footer}
                        </footer>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        portalElement
    );
};

export default Modal;
