import Map from '../../shared/Map';
import UpdatePlace from '../components/Update/UpdatePlace';
import { useParams } from 'react-router-dom';
import UserDetailsCard from '../components/UserDetails';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        shortDescription: 'Famous skyscraper in NYC',
        description:
            'One of the most iconic buildings in the world. It has been featured in many movies and symbolizes the city’s skyline.',
        address: '20 W 34th St, New York, NY 10001, United States',
        creator: 'u1',
        coordinates: { lat: 40.748817, lng: -73.985428 },
        imageURL: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nosm40S0ju74D4iznnNDMjfAbT6ld9R4CF4DCb67kGKw-RA751PE5CmJRoGr-Z1TEXciZOIWi-IEo9NSjmqOnkR8GM1hgLp3D8ed2sOvwns-jXJp9Qmqoj2ho39sxvvo04FCjzO=s1360-w1360-h1020-rw',
    },
    {
        id: 'p2',
        title: 'Eiffel Tower',
        shortDescription: 'Iconic Paris landmark',
        description: 'Must visit place in Paris.',
        address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
        creator: 'u2',
        coordinates: { lat: 48.8584, lng: 2.2945 },
        imageURL: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noRnUltszqA2i8hc0pYn4OgiFBuU4tESbiD8r2DJtw7N3-5LeHw3frO025dXK3zfkiSCTj3pefKmz0O1k7fGGXfin6uMld7bq-6WKskH3vREc09Ic2iBVTeNZ2eRrJJiW6mX_UXLSeomSg=s1360-w1360-h1020-rw',
    },
];

const USERS = [
    {
        id: 'u1',
        name: 'John Doe',
        image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        places: 3,
        follower: [1, 2, 3],
        following: [1, 2],
    },
    {
        id: 'u2',
        name: 'Jane Smith',
        image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        places: 5,
        follower: [1, 2, 3, 4, 5, 6],
        following: [1, 2, 3, 4, 5, 6],
    },
];

const Place = () => {
    const placeId = useParams().pid;
    const place = DUMMY_PLACES.find((p) => p.id === placeId);
    const user = USERS.find((u) => u.id === place?.creator);

    if (!place) {
        return (
            <div className="p-8 text-center text-red-600">
                <h2>No place found.</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-12 space-y-12">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 border-b pb-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-800">{place.title}</h1>
                        <UserDetailsCard user={user} />
                        <p className="text-sm text-gray-500 mt-1">{place.address}</p>
                    </div>
                    <div className="shrink-0">
                        <UpdatePlace place={place} />
                    </div>
                </div>


                <div className="text-xl italic text-indigo-600 border-l-4 border-indigo-500 pl-4">
                    “{place.shortDescription}”
                </div>


                <div className="grid md:grid-cols-2 gap-8">
                    <img
                        src={place.imageURL}
                        alt={place.title}
                        className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="h-80 rounded-xl overflow-hidden shadow-md border border-gray-200">
                        <Map center={place.coordinates} />
                    </div>
                </div>


                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this place</h2>
                    <p className="text-base text-gray-700 leading-relaxed">
                        {place.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Place;
