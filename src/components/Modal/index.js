import React from 'react'
import Modal from '@material-ui/core/Modal';
import { AiFillCloseCircle } from 'react-icons/ai';

import { ModalWrapper, ModalCloseIcon } from './ModalElement';
import ModalItems from './ModalItems';

const HobbieModal = props => {

    const body = (
        <ModalWrapper hobbie={props.hobbie}>
            <ModalCloseIcon>
                <AiFillCloseCircle
                    size='2.3em'
                    color={props.themecolor}
                    onClick={() => props.modalClose(false)} />
            </ModalCloseIcon>
            <ModalItems
                themecolor={props.themecolor}
                hobbie={props.hobbie} />
        </ModalWrapper>
    )



    return (
        <Modal
            open={props.open}
            onClose={() => props.modalClose(false)}>
            {body}
        </Modal>
    )
}

export default HobbieModal;
