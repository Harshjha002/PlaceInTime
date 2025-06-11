import Input from "../../shared/formElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE': {
            let formIsValid = true;
            for (const inputId in state.formData) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.formData[inputId].isValid;
                }
            }
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        }

        default:
            return state;
    }
};

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        formData: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            },
            detailedDescription: {
                value: '',
                isValid: false
            }
        },
        isValid: false,
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value,
            isValid,
            inputId: id
        });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("FORM SUBMITTED:", formState.formData);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="
                max-w-xl 
                mx-auto 
                mt-10 
                bg-white 
                p-8 
                rounded-2xl 
                shadow-lg 
                border 
                border-[#90D1CA] 
                space-y-6
            "
        >
            <h2 className="text-2xl font-semibold text-[#096B68]">Add a New Place</h2>

            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                errorText="Title cannot be empty and must be at least 5 characters."
                onInput={inputHandler}
            />

            <Input
                id="description"
                element="textarea"
                label="Short Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a description (at least 5 characters)."
                onInput={inputHandler}
            />

            <Input
                id="address"
                element="input"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter an address."
                onInput={inputHandler}
            />

            <Input
                id="detailedDescription"
                element="textarea"
                label="Detailed Experience"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a detailed experience (at least 5 characters)."
                onInput={inputHandler}
            />

            <button
                type="submit"
                disabled={!formState.isValid}
                className={`
                    w-full 
                    py-3 
                    text-white 
                    rounded-lg 
                    font-semibold 
                    transition 
                    duration-300 
                    ${formState.isValid
                        ? "bg-[#129990] hover:bg-[#096B68] active:bg-[#096B68]"
                        : "bg-gray-300 cursor-not-allowed"}
                `}
            >
                Add Place
            </button>
        </form>
    );
};

export default NewPlace;
