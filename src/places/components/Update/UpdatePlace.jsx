import { useState } from "react";
import UpdateForm from "./UpdateForm";
import Modal from "../../../shared/Modal";

const UpdatePlace = ({ place }) => {
    const [showModal, setShowModal] = useState(false);

    const openModalHandler = () => {
        setShowModal(true);
    };

    const closeModalHandler = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button
                onClick={openModalHandler}
                className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition mb-4"
            >
                Update Place
            </button>
            <Modal
                show={showModal}
                onCancel={closeModalHandler}
                header="Update Place"
                footer={
                    <button
                        onClick={closeModalHandler}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                        Close
                    </button>
                }
            >
                <UpdateForm title={place.title} description={place.description

                } />
            </Modal>
        </div>
    );
};

export default UpdatePlace;
