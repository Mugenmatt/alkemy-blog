import {useState, useEffect, useRef, useContext} from 'react';
import {
    DetailContainer,
    DetailPageTitle,
    PostContainer,
    PostDetailTitle,
    PostDetailBody,
    Lottie,
} from '../assets/styledComponents/styledDetail'
import { UserContext } from '../assets/utils/UserContext';
import lottie from 'lottie-web';


const Detail = (props) => {
    const idPost = props.match.params.id;
    const url = 'https://reqres.in/api/users';
    const [selectedUser, setSelectedUser] = useState([])
    const [fetchIsDone, setFetchIsDone] = useState(false);
    const container = useRef(null);
    const {users} = useContext(UserContext);
    
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/lottieAnimations/userDetail.json'),
            name: "userDetail",
        })
    }, [fetchIsDone])

    function fakeLoading() {
        return setTimeout(() => { setFetchIsDone(true) }, 1500);
    }
 
    useEffect(() => {
            setFetchIsDone(true)
            async function fetchIdPost() {
            try{
                const fetchData = await fetch(`${url}/${idPost}`);
                const fetchJson = await fetchData.json();
                const userData = fetchJson.data;
                // console.log(userData);
                const userFind = users.find(user => {
                    return user.id === userData.id;
                })
                const dataReplace = Object.assign(userData, userFind);
                setSelectedUser(dataReplace);
                setFetchIsDone(false)
                fakeLoading()
            } catch {
                console.log('ERROR: ');
            }
        }
        fetchIdPost();
    }, [idPost, users])


    return (
        <DetailContainer>
            <DetailPageTitle> User Detail </DetailPageTitle>
            { !fetchIsDone ? 
            <Lottie ref={container} /> 
            : <PostContainer>
                    <PostDetailTitle> { selectedUser.first_name } { selectedUser.last_name } </PostDetailTitle>
                    <PostDetailBody> { selectedUser.email } </PostDetailBody>
            </PostContainer>
            }
        </DetailContainer>
    );
};

export default Detail;