import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    HeaderContainer,
    LinkBtn
} from '../styledComponents/styledHeader';

const Header = () => {
    
    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        <HeaderContainer>
            { currentLocation !== '/' ?
            <Link style={{textDecoration:'none', color:'#000'}} to='/'>
                <LinkBtn type='button' value='Home' />
            </Link>
            :
            <Link style={{textDecoration:'none', color:'#000'}} to='/create-post'>
                <LinkBtn type='button' value='New Post' />
            </Link>
            }
        </HeaderContainer>
    );
};

export default Header;