import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {
    DetailContainer,
    DetailPageTitle,
    PostContainer,
    PostDetailTitle,
    PostDetailBody,
    Lottie,
    GoBack
} from '../assets/styledComponents/styledDetail'

import lottie from 'lottie-web';


const Detail = (props) => {
    const idPost = props.match.params.id;
    const [selectedPost, setSelectedPost] = useState([])
    const [fetchIsDone, setFetchIsDone] = useState(false);
    const container = useRef(null);
    
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/lottieAnimations/postbox.json'),
            name: "PostBox",
        })
    }, [fetchIsDone])

    function fakeLoading() {
        return setTimeout(() => { setFetchIsDone(true) }, 1500);
    }
 
    useEffect(() => {
        async function fetchIdPost() {
            try{
                setFetchIsDone(true)
                const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
                const fetchJson = await fetchData.json();
                setSelectedPost(fetchJson);
                setFetchIsDone(false)
                fakeLoading()
            } catch {
                console.log('ERROR!');
            }
        }
        fetchIdPost();
    }, [])


    return (
        <DetailContainer>
            <DetailPageTitle> Post Detail </DetailPageTitle>
            { !fetchIsDone ? 
            <Lottie ref={container} /> 
            : <PostContainer>
                    <PostDetailTitle> { selectedPost.title } </PostDetailTitle>
                    <PostDetailBody> { selectedPost.body } </PostDetailBody>
                </PostContainer>
            }
            <Link to='/' style={{ textDecoration:'none' }} >
                <GoBack type='button' value='Back' />
            </Link>
        </DetailContainer>
    );
};

export default Detail;