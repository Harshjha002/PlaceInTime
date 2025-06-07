import { useState } from 'react';
import Card from '../../shared/Card';
import { Link } from 'react-router-dom';
import Map from '../../shared/Map';
import Modal from '../../shared/Modal';

const AllPlacesItem = ({
    id,
    image,
    title,
    shortdescription,
    address,
    creatorId,
    coordinates,
}) => {

    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={address}
                style={{ maxWidth: '700px', width: '95%' }}
                footer={
                    <button
                        onClick={closeMapHandler}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                        Close
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

            <li className="list-none">
                <Card>
                    <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-white">
                        <div className="w-full md:w-64 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1 w-full flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                                <Link
                                    to={`/users/${creatorId}`}
                                    className="text-purple-600 text-sm hover:underline font-medium"
                                >
                                    View Creator
                                </Link>
                            </div>

                            <div className="mb-5 space-y-2">
                                <h3 className="text-gray-500 text-sm">{address}</h3>
                                <p className="text-gray-700 leading-relaxed">{shortdescription}</p>
                            </div>

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

                            <button className="px-5 py-2 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition font-medium w-fit"
                                onClick={openMapHandler}
                            >
                                View on Map
                            </button>
                        </div>
                    </div>
                </Card>
            </li>
        </>
    );
};

export default AllPlacesItem;
