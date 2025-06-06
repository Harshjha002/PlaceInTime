const Card = ({ children }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {children}
        </div>
    );
};

export default Card;
