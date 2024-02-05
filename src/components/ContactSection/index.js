import React, { useState } from "react";

import {
    ContactContainer,
    ContactImageContainer,
    ContactImage,
    ContactFormContainer,
    FormSuccess,
    ContactFormH3,
} from "./ContactElements";
import { InfoBackgroundText } from "../InfoSection/InfoElements";
import { imageSelector } from "../imageSelection";
import ContactForm from "./ContactForm";
import { BtnWrap, Button } from "../InfoSection/InfoElements";
import Resume from "../../Resume/AmarnathKP.pdf";

const ContactMe = ({ currentTheme }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log("form submitted", formSubmitted);

    return (
        <ContactContainer id='contact' currentTheme={currentTheme}>
            <InfoBackgroundText themecolor={currentTheme}>
                Contact
            </InfoBackgroundText>
            <ContactImageContainer>
                <ContactImage
                    src={imageSelector(currentTheme, "contact")}
                    alt='contact-image'
                />
            </ContactImageContainer>
            <ContactFormContainer theme={currentTheme}>
                {formSubmitted ? (
                    <FormSuccess currentTheme={currentTheme}>
                        <h4>Form Submitted Successfully</h4>
                        <p style={{ marginBottom: "5px" }}>
                            Thank You for your valuable feedback
                        </p>
                        <BtnWrap>
                            <Button
                                // to='home'
                                href={Resume}
                                themecolor={`${currentTheme}`}
                                download
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={1}
                                dark={0}
                                dark2={1}>
                                Download Resume
                            </Button>
                        </BtnWrap>
                    </FormSuccess>
                ) : (
                    <>
                        <ContactFormH3 theme={currentTheme}>
                            CONTACT ME
                        </ContactFormH3>
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
