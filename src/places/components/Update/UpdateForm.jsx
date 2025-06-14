import Input from "../../../shared/formElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../shared/utils/validators";
import { useForm } from "../../../shared/hooks/useForm";

const UpdateForm = ({ title, description }) => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: title,
                isValid: true,
            },
            description: {
                value: description,
                isValid: true,
            },
        },
        true
    );

    const submitHandler = (e) => {
        e.preventDefault();
        if (!formState.isValid) return;

        console.log("Updated Place:", {

            title: formState.formData.title.value,
            description: formState.formData.description.value,

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
                initialValue={title}
                initialValid={true}
            />

            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description."
                onInput={inputHandler}
                initialValue={description}
                initialValid={true}
            />

            <button
                type="submit"
                disabled={!formState.isValid}
                className={`px-4 py-2 rounded-md text-white transition duration-200 ${formState.isValid
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
