import { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    HomeContainer,
    HomeTitle,
    List,
    ListItem,
    ListItemContainer,
    ListTitle,
    UserOptions,
    EditBtn,
    DeleteBtn
} from '../assets/styledComponents/styledHome';
import { Lottie } from '../assets/styledComponents/styledDetail'
import lottie from 'lottie-web';
import { UserContext } from '../assets/utils/UserContext';

const Home = () => {
    const {users, setUsers} = useContext(UserContext);
    const [fetchIsDone, setFetchIsDone] = useState(false);
    const url = 'https://reqres.in/api/users'

    const container = useRef(null);
    
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/lottieAnimations/delete.json'),
            name: "DeleteUser",
        })
    }, [fetchIsDone])

    function fakeLoading() {
        return setTimeout(() => { setFetchIsDone(false) }, 2000);
    }

    const handleDeleteUser = (id) => {
        setFetchIsDone(true)
        fetch(`${url}/${id}`, {
            method:'DELETE',
        })
        
        const filteredUsers = users.filter(user => {
            return user.id !== id;
        })
        fakeLoading()
        setUsers(filteredUsers);
    }

    return (
        <HomeContainer>
            <HomeTitle>Users</HomeTitle>
            
            { fetchIsDone ? <Lottie ref={container} style={{margin:'auto'}} /> :
                <List>
                    {
                        users.map((user) => {
                            return <ListItem key={user.id}>
                                <ListItemContainer>

                                    <Link to={`/detail/${user.id}`} style={{ textDecoration: 'none' }}>
                                        <ListTitle>{user.first_name} {user.last_name}</ListTitle>
                                    </Link>

                                    <UserOptions>

                                        <Link to={`/edit-user/${user.id}`} style={{textDecoration: 'none', color: '#000'}} >
                                            <EditBtn type='button' value='Edit' />
                                        </Link>

                                        <DeleteBtn type='submit' value='Delete' onClick={() => handleDeleteUser(user.id)} />

                                    </UserOptions>

                                </ListItemContainer>
                                
                            </ListItem>
                        })
                    }
                </List>
            }
        </HomeContainer>
    );
};

export default Home;