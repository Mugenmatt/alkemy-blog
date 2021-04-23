import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 40%;
    margin: auto;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1199.98px) {
        width: 70%;
    }
    @media (max-width: 575.98px) {
        width: 85%;
    }
`;

export const TitleCreateEditPost = styled.h1`
    font-size: 5em;
    font-weight: lighter;
    margin-bottom: 5%;
    text-align: center;
    @media (max-width: 767.98px) {
        font-size: 4em;
    }
    @media (max-width: 575.98px) {
        font-size: 3em;
        font-weight: 300;
    }
`;

export const ErrorMsg = styled.p`
    color: red;
    font-size: 1.4em;
    margin-bottom: 3%;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 5% 2%;
    margin-bottom: 5%;
`;
export const InputTitle = styled.input`
    width: 90%;
    font-size: 1.5em;
    color:  rgba(255, 0, 55, 1);
    padding: 1%;
    border: 1px solid #000;
    box-shadow: none;
    border-radius: 10px;
    margin-bottom: 5%;
    cursor: pointer;
    pointer-events: ${(props) => props.pointerEvent};
    outline: none;
    :focus {
        border: 1px solid  rgba(255, 0, 55, 1);
    }
  @media (max-width: 1199.98px) {
    font-size: 2.5em;
  }
    @media (max-width: 767.98px) {
        font-size: 2em;
    }
    @media (max-width: 375px) {
        font-size: 1.5em;
    }
`;

export const InputBody = styled.textarea`
    width: 90%;
    color:  rgba(255, 0, 55, 1);
    font-size: 1.5em;
    height: 150px;
    padding: 1%;
    border: 1px solid #000;
    box-shadow: none;
    border-radius: 10px;
    margin-bottom: 5%;
    cursor: pointer;
    outline: none;
    resize: none;
    :focus {
        border: 1px solid  rgba(255, 0, 55, 1);
    }
    @media (max-width: 1199.98px) {
        font-size: 2.5em;
    }
    @media (max-width: 767.98px) {
        font-size: 2em;
    }
    @media (max-width: 375px) {
        font-size: 1.5em;
    }
`;

export const InputSubmit = styled.input`
    padding: 2%;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 2em;
    transition: 0.3s ease-in-out all;
    :hover {
        background-color: rgba(255, 0, 55, 1);
        color: #fff;
    }
    @media (max-width: 767.98px) {
        padding: 4%;
    }
`;