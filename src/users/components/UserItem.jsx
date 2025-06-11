import { Link } from "react-router-dom";
import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

const UserItem = ({ id, image, name, placeCount }) => {
    return (
        <li className="rounded-2xl transition-transform hover:scale-[1.02] duration-300">
            <Card>
                <div className="flex flex-col items-center text-center px-4 py-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-4">
                        <Avatar image={image} name={name} />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900">{name}</h2>

                    <Link
                        to={`/users/${id}`}
                        className="text-sm text-indigo-600 hover:underline hover:text-indigo-700 transition mb-1"
                    >
                        View Profile
                    </Link>

                    <p className="text-sm text-gray-500 mb-4">
                        Places visited: <span className="font-semibold text-indigo-600">{placeCount}</span>
                    </p>

                    <div className="flex gap-3">
                        <button className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium">
                            Follow +
                        </button>

                        <Link
                            to={`/${id}/places`}
                            className="px-4 py-1 text-sm rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition font-medium"
                        >
                            View Places
                        </Link>
                    </div>
                </div>
            </Card>
        </li>
    );
};

export default UserItem;
