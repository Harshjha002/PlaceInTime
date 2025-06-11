import UsersPlacesItems from "./UsersPlacesItems";
import { Link } from "react-router-dom";
import Card from "../../shared/Card";

const UserPlacesList = ({ places }) => {
    if (!places || places.length === 0) {
        return (
            <div className="max-w-2xl mx-auto mt-16">
                <Card>
                    <div className="text-center py-12 px-6">
                        <div className="mb-6 text-6xl">📍</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            No places found
                        </h2>
                        <p className="text-gray-500 mb-6">Get started by adding a new place.</p>
                        <Link
                            to="/places/new"
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold transition duration-200 transform hover:scale-105 shadow-md"
                        >
                            Add Your First Place
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <section className="mt-12 px-4 sm:px-6 lg:px-8">
            <ul className="space-y-8 max-w-5xl mx-auto">
                {places.map((place) => (
                    <UsersPlacesItems
                        key={place.id}
                        id={place.id}
                        image={place.imageURL}
                        title={place.title}
                        address={place.address}
                        creatorId={place.creator}
                        shortDescription={place.shortDescription}
                        coordinates={place.coordinates}
                    />
                ))}
            </ul>
        </section>
    );
};

export default UserPlacesList;
