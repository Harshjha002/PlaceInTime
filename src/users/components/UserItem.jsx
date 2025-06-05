import { Link } from "react-router-dom";
import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

const UserItem = (props) => {
    return (
        <li className="rounded-xl transition-transform hover:scale-[1.02]">
            <Card>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md mb-4">
                        <Avatar image={props.image} name={props.name} />

                    </div>

                    <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>

                    <Link
                        to={`/users/${props.id}`}
                        className="text-sm text-blue-500 hover:underline hover:text-blue-600 transition mb-2"
                    >
                        View Profile
                    </Link>

                    <h3 className="text-sm text-indigo-600 mt-1 mb-4">
                        Places visited: <span className="font-medium">{props.placeCount}</span>
                    </h3>


                    <div className="flex gap-4">
                        <button className="px-4 py-1 text-sm rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition">
                            Follow +
                        </button>

                        <Link
                            to={`/${props.id}/places`}
                            className="px-4 py-1 text-sm rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition"
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
