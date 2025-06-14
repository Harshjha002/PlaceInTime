
import { useCallback , useReducer } from "react";


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

 

export const useForm = (initialInput , inFormValidity) => {
 const [formState, dispatch] = useReducer(formReducer,{
    inputs:initialInput,
    isValid:inFormValidity
 })

  const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value,
            isValid,
            inputId: id
        });
    }, []);


    return [formState , inputHandler];

}