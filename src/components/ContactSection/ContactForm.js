import React, { useState } from "react";
import axios from "axios";
// import Rating from "react-rating";

import CustomizedRatings from "../../utils/ui/Rating";
import useInput from "../../utils/hooks/useInput";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import { UserForm } from "./ContactElements";
// import { Button } from "../ButtonElement";

const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().match(emailRegex);

const ContactForm = ({ theme, setFormSubmitted }) => {
    const [rating, setRating] = useState(0);
    const {
        value: nameValue,
        isValid: isNameValid,
        isTouched: isNameTouched,
        onBlurHandler: nameBlurHandler,
        // onClear: nameClear,
        onInputChangehandler: nameChangeHandler,
    } = useInput(isEmpty);
    const {
        value: emailValue,
        isValid: isEmailValid,
        isTouched: isEmailTouched,
        onBlurHandler: emailBlurHandler,
        // onClear: emailClear,
        onInputChangehandler: emailChangeHandler,
    } = useInput(isEmail);
    const {
        value: feedbackValue,
        isValid: isFeedbackValid,
        isTouched: isFeedbackTouched,
        onBlurHandler: feedbackBlurHandler,
        // onClear: feedbackClear,
        onInputChangehandler: feedbackChangeHandler,
    } = useInput(isEmpty);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let feedback = {
            name: nameValue,
            email: emailValue,
            rating: rating,
            feedback: feedbackValue,
        };
        console.log(feedback);
        await axios
            .put(
                `https://aamarnathkpresume-default-rtdb.asia-southeast1.firebasedatabase.app/${nameValue}.json`,
                feedback
            )
            .then((res) => {
                console.log("success ", res.data);
                // nameClear();
                // emailClear();
                // feedbackClear();
                setFormSubmitted(true);
            })
            .catch((error) => {
                console.log("responded with an error ", error);
                return "failed";
            });
    };

    const onChangeRating = (event, value) => {
        console.log(event.target.value, value);
        setRating(value);
    };

    const isUserNameValid = isNameValid ? "" : classes["error-input"];
    const isUserEmailValid = isEmailValid ? "" : classes["error-input"];
    const isUserFeedbackValid = isFeedbackValid ? "" : classes["error-input"];
    const isFormValid =
        isNameTouched &&
        isNameValid &&
        isEmailTouched &&
        isEmailValid &&
        isFeedbackTouched &&
        isFeedbackValid;

    return (
        <UserForm
            className={classes["user-form"]}
            onSubmit={onSubmitHandler}
            theme={theme}>
            <input
                className={isUserNameValid}
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                placeholder='NAME'
                id='username'
                type='text'
            />

            <input
                className={isUserEmailValid}
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                placeholder='EMAIL'
                id='email'
                type='email'
            />

            <textarea
                className={isUserFeedbackValid}
                value={feedbackValue}
                onChange={feedbackChangeHandler}
                onBlur={feedbackBlurHandler}
                placeholder='FEEDBACK'
                id='feedback'
                type='text'
            />

            {/* <Rating start={0} stop={5} fractions={2} /> */}

            <CustomizedRatings rating={rating} onChange={onChangeRating} />
            <div style={{ display: "inline" }}>
                <Button
                    themecolor={theme}
                    disabled={!isFormValid}
                    active={isFormValid}
                    onClick={onSubmitHandler}
                    type='submit'>
                    SUBMIT
                </Button>
                <Button themecolor={theme} active={true} type='button'>
                    <a
                        href='mailto:aamarnathkp@gmail.com'
                        style={{ color: "black" }}>
                        Send email
                    </a>
                </Button>
            </div>
        </UserForm>
    );
};

export default ContactForm;
