import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 40%;
    margin: auto;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleCreateEditPost = styled.h1`
    font-size: 5em;
    font-weight: lighter;
    color: #fff;
    margin-bottom: 5%;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 5% 2%;
    margin-bottom: 5%;
`;
export const InputTitle = styled.input`
    width: 90%;
    font-size: 1.5em;
    padding: 1%;
    border: 1px solid transparent;
    box-shadow: none;
    border-radius: 10px;
    margin-bottom: 5%;
    cursor: pointer;
    outline: none;
    :focus {
        border: 1px solid #000;
    }
`;

export const InputBody = styled.textarea`
    width: 90%;
    font-size: 1.5em;
    height: 150px;
    padding: 1%;
    border: 1px solid transparent;
    box-shadow: none;
    border-radius: 10px;
    margin-bottom: 5%;
    cursor: pointer;
    outline: none;
    resize: none;
    :focus {
        border: 1px solid #000;
    }
`;

export const InputSubmit = styled.input`
    padding: 2%;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    font-size: 2em;
    :hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #fff;
    }
`;