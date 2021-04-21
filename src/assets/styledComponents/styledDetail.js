import styled from 'styled-components/macro';

export const DetailContainer = styled.div`
    padding: 5% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DetailPageTitle = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 3em;
    font-weight: lighter;
    margin-bottom: 5%;
`;
export const PostContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const PostDetailTitle = styled.h3`
    font-size: 2.4em;
    margin-bottom: 5%;
`;
export const PostDetailBody = styled.blockquote`
    font-size: 1.7em;
    font-style: italic;
    font-weight: lighter;
    color: #fff;
    margin-bottom: 5%;
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

export const Lottie = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
`;