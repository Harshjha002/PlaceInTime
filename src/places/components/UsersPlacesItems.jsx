import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/Card';
import Modal from '../../shared/Modal';

const UsersPlacesItems = ({ id, image, title, shortDescription, address, creatorId }) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <>
            <li className="mb-6">
                <Modal
                    show={showMap}
                    onCancel={closeMapHandler}
                    header={address}
                    footer={
                        <button
                            onClick={closeMapHandler}
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                        >
                            Close
                        </button>
                    }
                >
                    <div className="text-center text-lg text-gray-700 p-4">The Map</div>
                </Modal>

                <Card>
                    <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl shadow-2xl bg-white border border-purple-100 transition hover:shadow-purple-200">

                        {/* Image */}
                        <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden">
                            <img src={image} alt={title} className="object-cover w-full h-full" />
                        </div>

                        {/* Info */}
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
                                <h3 className="text-sm text-purple-500">{address}</h3>
                                <p className="text-gray-700 leading-relaxed">{shortDescription}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <Link
                                    to={`/places/${id}`}
                                    className="px-4 py-1 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition font-medium"
                                >
                                    View Detail
                                </Link>
                                <button
                                    onClick={openMapHandler}
                                    className="px-4 py-1 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition font-medium"
                                >
                                    View on Map
                                </button>
                            </div>

                            {/* Edit/Delete */}
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
        </>
    );
};

export default UsersPlacesItems;
