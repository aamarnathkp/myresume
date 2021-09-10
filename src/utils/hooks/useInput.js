import { useState } from "react";

const useInput = (validity) => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const onInputChangehandler = (event) => {
        // setIsTouched(true);
        setInputValue(event.target.value);
    };

    const onBlurHandler = (event) => {
        setIsTouched(true);
    };

    const onClear = () => {
        setInputValue("");
        setIsTouched(false);
    };

    const isValid = isTouched ? validity(inputValue) : true;

    return {
        value: inputValue,
        isValid,
        isTouched,
        onInputChangehandler,
        onBlurHandler,
        onClear,
    };
};

export default useInput;
