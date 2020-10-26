import React from "react";
import styled from "styled-components";
import Button from "@/shared/Button";
import H1 from "./shared/H1";

const Bigbanner = ({data}) => {
    return (
        <Container style={{backgroundImage: 'url(https://wpbingosite.com/wordpress/mihouse/wp-content/uploads/2019/06/bg-banner1.png)'}}>
            <small>{data.Caption && data.Caption}</small>
            <H1>{data.Title && data.Title}</H1>
            <p>{data.Description && data.Description}</p>
            {data.ButtonText && <a href={data.ButtonLink && data.ButtonLink}><Button width="25vw" red>{data.ButtonText}</Button></a>}
        </Container>
    );
};

export default Bigbanner;

const Container = styled.div`
    padding:15px;
    padding-top: 15vh;
    padding-bottom: 15vh;
    text-align: center;
    background-size: 100% 100%;
    h1 {
        margin-top:2vh;
        margin-bottom:4vh;
    }
    small {
        border-bottom: 2px solid ${(props) => props.theme.mainRed};
    }
    p{
        margin:0px auto;
        max-width:800px;
        margin-bottom:5vh;
    }
`;
