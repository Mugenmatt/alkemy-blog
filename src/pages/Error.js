import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ErrorContainer, ErrorMsg, LottieError, GoBack } from '../assets/styledComponents/styledError';
import lottie from 'lottie-web';

const Error = () => {
    const container = useRef(null);
    
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/lottieAnimations/404Error.json'),
            name: "404Error",
        })
    }, [])
    
    return (
        <ErrorContainer>
            <ErrorMsg>Oops! Page not found!</ErrorMsg>
            <LottieError ref={container} />
            <Link to='/' style={{ textDecoration:'none' }} >
                <GoBack type='button' value='Back' />
            </Link>
        </ErrorContainer>
    );
};

export default Error;