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
            <Link style={{textDecoration:'none', color:'#000'}} to='/create-user'>
                <LinkBtn type='button' value='Add User' />
            </Link>
            }
        </HeaderContainer>
    );
};

export default Header;