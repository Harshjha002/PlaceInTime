import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/Card';

const UsersPlacesItems = ({ id, image, title, shortDescription, address, creatorId }) => {
    return (
        <li>
            <Card>
                <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-white">

                    <div className="w-full md:w-64 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                        <img src={image} alt={title} className="object-cover w-full h-full" />
                    </div>

                    <div className="flex-1 w-full flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                            <Link
                                to={`/users/${creatorId}`}
                                className="text-indigo-600 text-sm hover:underline font-medium"
                            >
                                View Creator
                            </Link>
                        </div>

                        <div className="mb-5 space-y-2">
                            <h3 className="text-gray-500 text-sm">{address}</h3>
                            <p className="text-gray-700 leading-relaxed">{shortDescription}</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link
                                to={`/places/${id}`}
                                className="px-4 py-1 text-sm rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 transition font-medium"
                            >
                                View Detail
                            </Link>

                            <button className="px-4 py-1 text-sm rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition font-medium">
                                View on Map
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <button className="px-4 py-2 rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition font-medium">
                                Edit
                            </button>
                            <button className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition font-medium">
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            </Card>
        </li>
    )
}

export default UsersPlacesItems;
