import React, { useState } from "react";
import Input from "../../../shared/formElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../shared/utils/validators";

const UpdateForm = ({ title, description }) => {
    const [formState, setFormState] = useState({
        title: { value: title, isValid: true },
        description: { value: description, isValid: true },
    });

    const inputHandler = (id, value, isValid) => {
        setFormState((prev) => ({
            ...prev,
            [id]: { value, isValid },
        }));
    };

    const formIsValid = formState.title.isValid && formState.description.isValid;

    const submitHandler = (e) => {
        e.preventDefault();
        if (!formIsValid) return;
        console.log("Updated Place:", {
            title: formState.title.value,
            description: formState.description.value,
        });
    };

    return (
        <form onSubmit={submitHandler} className="space-y-4 p-4">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                value={formState.title}
            />

            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description."
                onInput={inputHandler}
                value={formState.description}
            />

            <button
                type="submit"
                disabled={!formIsValid}
                className={`px-4 py-2 rounded-md text-white transition ${formIsValid
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-400 cursor-not-allowed"
                    }`}
            >
                Update Place
            </button>
        </form>
    );
};

export default UpdateForm;
