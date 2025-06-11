import Filteration from "../../shared/filteration/Filteration";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "John Doe",
            image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
            places: 3,
        },
        {
            id: "u2",
            name: "Jane Smith",
            image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
            places: 5,
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 py-10">
            <Filteration />
            <UsersList items={USERS} />
        </main>
    );
};

export default Users;
