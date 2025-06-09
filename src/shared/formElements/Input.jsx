import { useReducer, useEffect } from "react"
import { validate } from "../utils/validators";

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true,

            }
        }
        default:
            return state;
    }

}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: "", isValid: false, isTouched: false })

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])


    const changeHandler = event => {
        dispatch({ type: "CHANGE", val: event.target.value, validators: props.validators });
    };



    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const element = props.element === 'input' ? (
        <input
            id={props.id}
            placeholder={props.placeholder}
            type={props.type}
            onBlur={touchHandler}
            onChange={changeHandler}
            className={
                `w-full 
                bg-[#FFFBDE] 
                border 
                border-[#90D1CA] 
                rounded-md 
                py-2 px-3 
                text-[#096B68] 
                placeholder-[#129990] 
                focus:border-[#129990] 
                focus:ring-2 
                focus:ring-[#129990]/40 
                outline-none 
                transition-all 
                duration-300 `
            }
            value={inputState.value}
        />
    ) : (
        <textarea
            id={props.id}
            rows={props.rows || 3}
            onBlur={touchHandler}
            onChange={changeHandler}
            className="
                w-full 
                bg-[#FFFBDE] 
                border 
                border-[#90D1CA] 
                rounded-md 
                py-2 px-3 
                text-[#096B68] 
                placeholder-[#129990] 
                focus:border-[#129990] 
                focus:ring-2 
                focus:ring-[#129990]/40 
                outline-none 
                transition-all 
                duration-300
            "
            value={inputState.value}
        />
    )


    return (
        <div className="flex flex-col gap-2 mb-4">
            <label
                htmlFor={props.id}
                className="text-[#096B68] font-medium text-sm"
            >
                {props.label}
            </label>
            {element}
            {!inputState.isValid && inputState.isTouched && (
                <p className="text-red-500 text-sm mt-1">
                    {props.errortext}
                </p>
            )}

        </div>
    )
}

export default Input
