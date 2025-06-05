import { Link } from "react-router-dom"

const Homepage = () => {
    return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white text-gray-800 px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800 leading-tight">
                Every place has a story.<br /> Every moment, a memory.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-2">
                Discover places. Relive moments.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
                Explore the world through memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/users"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
                >
                    Explore Places
                </Link>

                <Link
                    to="/places/new"
                    className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-50 transition"
                >
                    Add Your Experience
                </Link>
            </div>
        </div>



    )
}

export default Homepage
