import Card from "../../shared/Card";
import UserItem from "./UserItem";

const UsersList = ({ items }) => {
    if (items.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500 text-lg font-medium">
                <Card>
                    <h2>No users found. Try a different search.</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-8 pb-12">
            {items.map((user) => (
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
