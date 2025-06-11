import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/Card';
import Modal from '../../shared/Modal';
import Map from '../../shared/Map';

const UsersPlacesItems = ({ id, image, title, shortDescription, address, creatorId, coordinates }) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <>

            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={address}
                footer={
                    <button
                        onClick={closeMapHandler}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition font-semibold"
                    >
                        Close Map
                    </button>
                }
            >
                <div className="p-0">
                    <div
                        className="rounded-2xl overflow-hidden border border-purple-300 shadow-lg"
                        style={{ height: 'min(50vh, 400px)', width: '100%' }}
                    >
                        <Map center={coordinates} />
                    </div>
                </div>
            </Modal>


            <li>
                <Card>
                    <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl shadow-2xl bg-white border border-gray-100 transition hover:shadow-purple-200">


                        <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>


                        <div className="flex-1 w-full flex flex-col justify-between">

                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
                                <Link
                                    to={`/users/${creatorId}`}
                                    className="text-purple-600 text-sm hover:underline font-medium"
                                >
                                    View Creator
                                </Link>
                            </div>


                            <div className="mb-5 space-y-2">
                                <p className="text-sm text-purple-500">{address}</p>
                                <p className="text-gray-700 leading-relaxed">{shortDescription}</p>
                            </div>


                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <Link
                                    to={`/places/${id}`}
                                    className="px-4 py-1.5 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition font-medium"
                                >
                                    View Detail
                                </Link>
                                <button
                                    onClick={openMapHandler}
                                    className="px-4 py-1.5 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition font-medium"
                                >
                                    View on Map
                                </button>
                            </div>

                            {/* Edit & Delete */}
                            <div className="flex gap-3">
                                <button className="px-4 py-2 rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition font-semibold">
                                    Edit
                                </button>
                                <button className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition font-semibold">
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
