const Searchbar = () => {
    return (
        <div className="relative max-w-md w-full mx-auto">
            <input
                type="text"
                placeholder="Search users..."
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
        </div>
    );
};

export default Searchbar;
