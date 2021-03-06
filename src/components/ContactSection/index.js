import React, { useState } from "react";

import {
    ContactContainer,
    ContactImageContainer,
    ContactImage,
    ContactFormContainer,
    FormSuccess,
} from "./ContactElements";
import { imageSelector } from "../imageSelection";
import ContactForm from "./ContactForm";
import { BtnWrap, Button } from "../InfoSection/InfoElements";
import Resume from "../../Resume/AmarnathKP.pdf";

const ContactMe = ({ currentTheme }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log("form submitted", formSubmitted);

    return (
        <ContactContainer id='contact'>
            <ContactImageContainer>
                <ContactImage src={imageSelector(currentTheme, "contact")} />
            </ContactImageContainer>
            <ContactFormContainer theme={currentTheme}>
                {formSubmitted ? (
                    <FormSuccess>
                        <h4>Form Submitted Successfully</h4>
                        <p style={{ marginBottom: "5px" }}>
                            Thank You for your valuable feedback
                        </p>
                        <BtnWrap>
                            <Button
                                // to='home'
                                href={Resume}
                                themecolor={currentTheme}
                                download
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={0}
                                dark={0}
                                dark2={1}>
                                Download Resume
                            </Button>
                        </BtnWrap>
                    </FormSuccess>
                ) : (
                    <>
                        <h3 style={{ textAlign: "center" }}>CONTACT</h3>
                        <ContactForm
                            setFormSubmitted={setFormSubmitted}
                            theme={currentTheme}
                        />
                    </>
                )}
            </ContactFormContainer>
        </ContactContainer>
    );
};

export default ContactMe;
