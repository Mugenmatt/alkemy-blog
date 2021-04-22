// import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    HomeContainer,
    HomeTitle,
    List,
    ListItem,
    ListItemContainer,
    ListTitle,
    PostOptions,
    EditBtn,
    DeleteBtn
} from '../assets/styledComponents/styledHome';

const Home = (props) => {
    const { posts, handleDeletePost } = props;

    return (
        <HomeContainer>
            <HomeTitle>Posts</HomeTitle>
            
            <List>
                {
                    posts.map((post) => {
                        return <ListItem key={post.id}>
                            <ListItemContainer>
                                <Link to={`/detail/${post.id}`} style={{ textDecoration: 'none' }}>
                                    <ListTitle>{post.title}</ListTitle>
                                </Link>
                                <PostOptions>
                                    <Link to={`/edit-post/${post.id}`} style={{textDecoration: 'none', color: '#000'}} >
                                        <EditBtn type='button' value='Edit' />
                                    </Link>
                                    <form method='DELETE'>
                                        <DeleteBtn type='button' value='Delete' onClick={() => handleDeletePost(post.id)} />
                                    </form>
                                </PostOptions>
                            </ListItemContainer>
                        </ListItem>
                    })
                }
            </List>
        </HomeContainer>
    );
};

export default Home;