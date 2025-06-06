import UsersPlacesItems from "./UsersPlacesItems";
import { Link } from 'react-router-dom';
import Card from '../../shared/Card';

const UserPlacesList = ({ places }) => {

    if (places.length === 0) {
        return (
            <div className="max-w-2xl mx-auto mt-8">
                <Card>
                    <div className="text-center py-12 px-6">
                        <div className="mb-6 text-6xl">📍</div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">No places yet</h1>
                        <Link
                            to="/places/new"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
                        >
                            Add Your First Place
                        </Link>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <ul className="space-y-6 mt-8 max-w-4xl mx-auto">
            {places.map((place) => (
                <UsersPlacesItems
                    key={place.id}
                    id={place.id}
                    image={place.imageURL}
                    title={place.title}
                    address={place.address}
                    creatorId={place.creator}
                    shortDescription={place.shortDescription}
                />
            ))}
        </ul>
    )
}

export default UserPlacesList;
