import Card from '../../shared/Card';
import { Link } from 'react-router-dom';

const AllPlacesItem = ({
    id,
    image,
    title,
    shortdescription,
    address,
    creatorId,
    // coordinates,
}) => {
    return (
        <li className="list-none">
            <Card>
                <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-white">
                    {/* Image Section */}
                    <div className="w-full md:w-64 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 w-full flex flex-col justify-between">
                        {/* Title & Creator */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                            <Link
                                to={`/users/${creatorId}`}
                                className="text-purple-600 text-sm hover:underline font-medium"
                            >
                                View Creator
                            </Link>
                        </div>

                        {/* Address & Description */}
                        <div className="mb-5 space-y-2">
                            <h3 className="text-gray-500 text-sm">{address}</h3>
                            <p className="text-gray-700 leading-relaxed">{shortdescription}</p>
                        </div>

                        {/* Action Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="text-sm text-gray-500">
                                Created by <b>Username</b>
                            </span>

                            <Link
                                to={`/places/${id}`}
                                className="px-4 py-1 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition font-medium"
                            >
                                View Place
                            </Link>

                            <button className="px-4 py-1 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition font-medium">
                                Follow
                            </button>
                        </div>

                        {/* Map Button */}
                        <button className="px-5 py-2 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition font-medium w-fit">
                            View on Map
                        </button>
                    </div>
                </div>
            </Card>
        </li>
    );
};

export default AllPlacesItem;
