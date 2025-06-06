import Card from '../../shared/Card'
import { Link } from 'react-router-dom'
import AllPlacesItem from './AllPlacesItem'

const AllplacesList = ({ places }) => {

    if (places.length === 0) {
        return (
            <div className="max-w-2xl mx-auto mt-8">
                <Card>
                    <div className="text-center py-12 px-6">
                        <div className="mb-6">
                            <span className="text-6xl">📍</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">No places yet</h1>
                        <h3 className="text-lg text-gray-600 mb-8">Be the first to add a place and start sharing amazing locations!</h3>
                        <Link
                            to={'/places/new'}
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
                        >
                            Add Your First Place
                        </Link>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="space-y-6">
                {places.map((place) => (
                    <AllPlacesItem
                        key={place.id}
                        id={place.id}
                        image={place.imageURL}
                        title={place.title}
                        shortdescription={place.shortdescription}
                        address={place.address}
                        creatorId={place.creator}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllplacesList