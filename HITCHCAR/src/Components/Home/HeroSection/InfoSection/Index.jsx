import React from 'react';
import { Button } from '../ButtonElement';
import { Link, NavLink } from 'react-router-dom';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({ lightBg,
    id,
    id1,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2 }) => {


        const linkStyle = {
            textDecoration: "none"
        }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText} >{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {id ? <BtnWrap>
                                    <Button
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}><Link style={linkStyle} to="/Main">{buttonLabel}</Link></Button>
                                </BtnWrap> :
                                    <BtnWrap>
                                        <Button
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}><NavLink style={linkStyle} to="/ShowPooled"> {buttonLabel}</NavLink>
                                        </Button>
                                </BtnWrap>
                                }
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection;