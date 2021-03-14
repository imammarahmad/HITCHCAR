import React, { useState } from 'react';
import Video from './Video/VIDEOFYP.mp4';
import { Link } from 'react-router-dom';
import { Button } from './ButtonElement';
import { useAuth } from '../../Context/AuthContext';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForwad,
    ArrowRight
} from './HeroElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const { currentUser, logout } = useAuth();

    const onHover = () => {
        setHover(!hover);
    }


    const linkStyle = {
        textDecoration: "none"
    }

    return (
        <>
            <HeroContainer id="home" style={{ marginTop: "-80px" }} >
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Car Rental Made Easy</HeroH1>
                    <HeroP>
                        Sign Up for a new account today and view rental cars near you.
                    </HeroP>
                    <HeroBtnWrapper>
                        {currentUser ? " " : <Button
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true' ><Link style={linkStyle} to="/Signup">Sign Up {hover ? <ArrowForwad /> : <ArrowRight />} </Link></Button>}
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>

        </>
    );
}

export default HeroSection;