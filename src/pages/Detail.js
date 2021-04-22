import {useState, useEffect, useRef} from 'react';
import {
    DetailContainer,
    DetailPageTitle,
    PostContainer,
    PostDetailTitle,
    PostDetailBody,
    Lottie,
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
            setFetchIsDone(true)
            async function fetchIdPost() {
            try{
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
    }, [idPost])


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
        </DetailContainer>
    );
};

export default Detail;