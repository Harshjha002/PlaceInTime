import Filteration from "../../shared/filteration/Filteration";
import Searchbar from "../../shared/filteration/Searchbar";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "John Doe",
            image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            places: 3,
        },
        {
            id: "u2",
            name: "Jane Smith",
            image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            places: 5,
        },
    ];

    return (
        <>

            <Filteration />

            <UsersList items={USERS} />
        </>
    );
};

export default Users;
