const Card = ({ children }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            {children}
        </div>
    );
};

export default Card;
