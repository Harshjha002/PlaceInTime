import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#E0ECFF] px-6 py-16 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#1F2A44] tracking-tight mb-6">
                    Every place has a story. <br /> Every moment, a memory.
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-2">
                    Discover places. Relive moments.
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                    Explore the world through memories.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/places"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
                    >
                        🌍 Explore Places
                    </Link>

                    <Link
                        to="/places/new"
                        className="inline-block border-2 border-indigo-600 text-indigo-700 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-100 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition duration-300"
                    >
                        ➕ Add Your Experience
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Homepage;
