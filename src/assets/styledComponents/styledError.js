import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3%;
`;
export const ErrorMsg = styled.p`
    font-size: 5em;
    font-weight: lighter;
    color: #fff;
`;
export const LottieError = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
`;

export const GoBack = styled.input`
    padding: 10px;
    border-radius: 10px;
    font-size: 1.5em;
    border: 1px solid #000;
    cursor: pointer;
    :hover {
        color: #fff;
        background-color: #000;
        font-weight: bolder;
    }
`;