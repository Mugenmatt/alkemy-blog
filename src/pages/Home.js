import React from 'react';
import { Link } from 'react-router-dom';
import {
    HomeContainer,
    HomeTitle,
    List,
    ListItem,
    ListItemContainer,
    ListTitle,
    FormDelete,
    DeleteBtn
} from '../assets/styledComponents/styledHome';

const Home = (props) => {
    const { posts } = props;
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
                                <FormDelete method='post'>
                                    <DeleteBtn type='submit' value='Delete' />
                                </FormDelete>
                            </ListItemContainer>
                        </ListItem>
                    })
                }
            </List>
        </HomeContainer>
    );
};

export default Home;