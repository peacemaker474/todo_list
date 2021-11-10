import React from 'react';
import styled from 'styled-components';

const ModalForm = styled.form`
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 2%;
    left: 4%;
`;

const ModalInput = styled.input`
    all: unset;
    width: 90%;
    height: 100%;
    font-size: 1.4rem;
    padding-left: 5px;
`;

const AddModal = () => {

    return (
        <>
            <ModalForm>
                <ModalInput placeholder="할일을 입력하세요" type="text" />
            </ModalForm>
        </>
    )
};

export default AddModal;