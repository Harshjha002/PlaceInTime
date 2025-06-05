
import UserItem from "./UserItem";

const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500 text-lg font-medium">
                No Users Found
            </div>
        );
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-lg">
            {props.items.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    );
};

export default UsersList;
