import React from 'react'
import UserPlacesList from '../components/UserPlacesList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        shortDescription: 'Famous skyscraper in NYC',
        description: 'One of the most iconic buildings.',
        address: '20 W 34th St, New York, NY 10001, United States',
        creator: 'u1',
        coordinates: { lat: 40.748817, lng: -73.985428 },
        imageURL:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nosm40S0ju74D4iznnNDMjfAbT6ld9R4CF4DCb67kGKw-RA751PE5CmJRoGr-Z1TEXciZOIWi-IEo9NSjmqOnkR8GM1hgLp3D8ed2sOvwns-jXJp9Qmqoj2ho39sxvvo04FCjzO=s1360-w1360-h1020-rw',
    },
    {
        id: 'p2',
        title: 'Eiffel Tower',
        shortDescription: 'Iconic Paris landmark',
        description: 'Must visit place in Paris.',
        address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
        creator: 'u2',
        coordinates: { lat: 48.8584, lng: 2.2945 },
        imageURL:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noRnUltszqA2i8hc0pYn4OgiFBuU4tESbiD8r2DJtw7N3-5LeHw3frO025dXK3zfkiSCTj3pefKmz0O1k7fGGXfin6uMld7bq-6WKskH3vREc09Ic2iBVTeNZ2eRrJJiW6mX_UXLSeomSg=s1360-w1360-h1020-rw',
    },
];
const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

    return (

        < UserPlacesList places={loadedPlaces} />
    )
}

export default UserPlaces;
