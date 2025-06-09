import Input from "../../shared/formElements/Input"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/validators"
import { useCallback, useReducer } from "react"


const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            {
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
                            value: action.value, isValid: action.isValid

                        }
                    },
                    isValid: formIsValid
                }

            }

        default:
            return state;

    }

}


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

        },
        isValid: false,
    })

    const inputHandler = useCallback(
        (id, value, isValid) => {
            dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id })

        }
        , [dispatch])


    const onSubmit = event => {
        event.preventDefault();
        console.log(formState.formData)

    }

    return (
        <form
            onSubmit={onSubmit}
            className="
                max-w-md 
                mx-auto 
                mt-8 
                bg-[#FFFBDE] 
                p-6 
                rounded-xl 
                border 
                border-[#90D1CA] 
                shadow-sm
            "
        >
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                errortext="Title cannot be empty and must be at least 5 characters."
                onInput={inputHandler}
            />

            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errortext="Please enter a description (at least 5 characters)."
                onInput={inputHandler}
            />

            <Input
                id="address"
                element="input"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errortext="Please enter an address."
                onInput={inputHandler}
            />

            <Input
                id="detailed-description"
                element="textarea"
                label="Detailed Experience"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errortext="Please enter a detailed experience (at least 5 characters)."
                onInput={inputHandler}
            />




            <button
                type="submit"
                className={`
                mt-4 
                font-semibold 
                py-2 px-4 
                rounded-lg 
                transition-colors 
                duration-300 
                ${formState.isValid
                        ? "bg-[#129990] text-[#FFFBDE] hover:bg-[#096B68] active:bg-[#096B68] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                        
  `}
                disabled={!formState.isValid}
            >
                ADD PLACE
            </button>

        </form>
    )
}

export default NewPlace
