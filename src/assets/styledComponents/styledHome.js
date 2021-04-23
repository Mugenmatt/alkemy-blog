import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
    padding: 5% 10%;
    text-align: center;
`;

export const HomeTitle = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 5em;
    font-weight: lighter;
    margin-bottom: 5%;
`;

export const CreatePost = styled.input`
    font-size: 2em;
    font-weight: lighter;
    background-color: #fff;
    margin-bottom: 5%;
    padding: 2%;
    border: 1px solid transparent;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    :hover {
        color: #fff;
        border: 1px solid #fff;
        background-color: rgba(255, 0, 55, 1);
    }
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767.98px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    width: 30%;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 3%;
    margin-bottom: 5%;
    transition: 0.3s ease-in-out all;
    box-shadow: 0 0 0 #000;
    :hover {
        transform: translateY(-20px);
        border: 1px solid #fff;
        box-shadow: 10px 10px 10px #000;
    }
    @media (max-width: 767.98px) {
        width: 90%;
    }
`;

export const ListItemContainer = styled.div``;

export const ListTitle = styled.p`
    font-size: 1em;
    text-align: center;
    color: rgba(255, 0, 55, 1);
    font-weight: bold;
    margin-bottom: 10%;
    @media (max-width: 1199.98px) {
        font-size: 1.5em;
    }
    @media (max-width: 375px) {
        font-size: 1.3em;
    }
`;

// export const FormDelete = styled.form`
//     display: flex;
//     justify-content: center;
// `;

export const UserOptions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const EditBtn = styled.input`
    padding: 10px 60%;
    font-size: 1em;
    border: 1px solid #000;
    border-radius: 10px;
    transition: 0.3s ease-in-out all;
    background-color: #fff;
    cursor: pointer;
    :hover {
        color: #fff;
        background-color: rgba(255, 0, 55, 1);
        border: 1px solid red;
    }
    @media (max-width: 1199.98px) {
        font-size: 1.2em;
    }
    @media (max-width: 375px) {
        padding: 10px 30%;
    }
`;

export const DeleteBtn = styled.input`
    padding: 10px;
    font-size: 1em;
    border: 1px solid #000;
    border-radius: 10px;
    transition: 0.3s ease-in-out all;
    background-color: #fff;
    cursor: pointer;
    :hover {
        color: #fff;
        background-color: rgba(255, 0, 55, 1);
        border: 1px solid red;
    }
    @media (max-width: 1199.98px) {
        font-size: 1.2em;
    }
    @media (max-width: 375px) {
        padding: 10px 5px;
    }
`;

