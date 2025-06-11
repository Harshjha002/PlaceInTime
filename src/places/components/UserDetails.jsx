import { Link } from 'react-router-dom';

const UserDetailsCard = ({ user }) => {
    if (!user) return null;

    return (
        <div className="mt-2 flex items-center gap-3">
            <img
                src={user.image}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border border-purple-500 shadow-sm"
            />
            <div className="text-sm text-gray-600">
                Added by{' '}
                <Link
                    to={`/users/${user.id}`}
                    className="text-purple-600 hover:underline font-medium"
                >
                    {user.name}
                </Link>
            </div>
        </div>
    );
};

export default UserDetailsCard;
