import styled from 'styled-components/macro';

export const DetailContainer = styled.div`
    padding: 5% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;
`;

export const DetailPageTitle = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 3em;
    font-weight: lighter;
    margin-bottom: 5%;
    @media (max-width: 375px) {
        font-size: 1.5em;
    }
`;

export const PostContainer = styled.div`
    text-align: center;
`;

export const PostDetailTitle = styled.h3`
    font-size: 2.4em;
    margin-bottom: 5%;
`;

export const ImgUser = styled.img`
    margin-bottom: 8%;
    border-radius: 10px;
    width: 70%;
`;

export const PostDetailBody = styled.blockquote`
    font-size: 1.7em;
    line-height: 50px;
    font-style: italic;
    font-weight: lighter;
    color: #fff;
    margin-bottom: 5%;
    @media (max-width: 1199.98px) {
        font-size: 2em;
    }
    @media (max-width: 375px) {
        font-size: 1.5em;
    }
`;

export const Lottie = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
`;