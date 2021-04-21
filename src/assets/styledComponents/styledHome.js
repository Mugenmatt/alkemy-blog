import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
    padding: 5% 10%;
`;

export const HomeTitle = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 3em;
    font-weight: lighter;
    margin-bottom: 5%;
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const ListItem = styled.li`
    list-style: none;
    width: 30%;
    background-color: #ccc;
    border-radius: 10px;
    padding: 3%;
    margin-bottom: 5%;
`;

export const ListItemContainer = styled.div`

`;

export const ListTitle = styled.p`
    font-size: 1em;
    text-align: center;
`;

export const FormDelete = styled.form`
    display: flex;
    justify-content: center;
`;

export const DeleteBtn = styled.input`
    padding: 10px;
    font-size: 1em;
    font-weight: bold;
    border: 1px solid #000;
    border-radius: 10px;
    margin-top: 10%;
    background-color: #fff;
    cursor: pointer;
    :hover {
        color: red;
        border: 1px solid red;
    }
`;

