import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 90%;
    background-color: rgba(255, 0, 55, .4);
    margin: auto;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    padding: 1%;
    border-radius: 10px;
`;

export const LinkBtn = styled.input`
    font-size: 1.5em;
    padding: 10%;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 0.3s ease-in-out all;
    cursor: pointer;
    :hover {
        background-color: rgba(255, 0, 55, .5);
        color: #fff;
        border: 1px solid #fff;
    }
    @media (max-width: 1199.98px) {
        font-size: 2.5em;
    }
    @media (max-width: 767.98px) {
        margin: 7% 0;
    }
`;