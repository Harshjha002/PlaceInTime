import { useParams, Link } from "react-router-dom";
import UserPlacesList from "../../places/components/UserPlacesList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        shortDescription: "Famous skyscraper in NYC",
        description:
            "One of the most iconic buildings in the world. It has been featured in many movies and symbolizes the city’s skyline.",
        address: "20 W 34th St, New York, NY 10001, United States",
        creator: "u1",
        coordinates: { lat: 40.748817, lng: -73.985428 },
        imageURL:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nosm40S0ju74D4iznnNDMjfAbT6ld9R4CF4DCb67kGKw-RA751PE5CmJRoGr-Z1TEXciZOIWi-IEo9NSjmqOnkR8GM1hgLp3D8ed2sOvwns-jXJp9Qmqoj2ho39sxvvo04FCjzO=s1360-w1360-h1020-rw",
    },
    {
        id: "p2",
        title: "Eiffel Tower",
        shortDescription: "Iconic Paris landmark",
        description: "Must visit place in Paris.",
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        creator: "u2",
        coordinates: { lat: 48.8584, lng: 2.2945 },
        imageURL:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noRnUltszqA2i8hc0pYn4OgiFBuU4tESbiD8r2DJtw7N3-5LeHw3frO025dXK3zfkiSCTj3pefKmz0O1k7fGGXfin6uMld7bq-6WKskH3vREc09Ic2iBVTeNZ2eRrJJiW6mX_UXLSeomSg=s1360-w1360-h1020-rw",
    },
];

const USERS = [
    {
        id: "u1",
        name: "John Doe",
        image:
            "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        places: 3,
        follower: [1, 2, 3],
        following: [1, 2],
    },
    {
        id: "u2",
        name: "Jane Smith",
        image:
            "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        places: 5,
        follower: [1, 2, 3, 4, 5, 6],
        following: [1, 2, 3, 4, 5, 6],
    },
];

const UserDashBoard = () => {
    const userId = useParams().uid;

    const user = USERS.find((u) => u.id === userId);
    const userPlaces = DUMMY_PLACES.filter((p) => p.creator === userId);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-xl">
                User not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto space-y-12">

                <div className="bg-white rounded-2xl shadow-lg p-6 sm:flex sm:items-center gap-6 border border-gray-100">
                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                    />
                    <div className="flex-1 mt-6 sm:mt-0">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                                <p className="text-sm text-gray-500">{user.places} Places Added</p>
                            </div>
                            <button className="mt-4 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-medium shadow-md transition">
                                Follow
                            </button>
                        </div>

                        <div className="mt-4 flex gap-8 text-center">
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{user.follower.length}</p>
                                <p className="text-xs text-gray-500 uppercase">Followers</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{user.following.length}</p>
                                <p className="text-xs text-gray-500 uppercase">Following</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Places by {user.name}
                        </h3>
                        <Link
                            to="/places/new"
                            className="text-sm text-indigo-600 font-medium hover:underline"
                        >
                            + Add Place
                        </Link>
                    </div>

                    {userPlaces.length > 0 ? (
                        <UserPlacesList places={userPlaces} />
                    ) : (
                        <p className="text-gray-500 italic">No places added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;
