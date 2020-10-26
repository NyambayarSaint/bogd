import React from "react";
import styled from "styled-components";
import LinedText from '@/shared/LinedText'
import H1 from '@/shared/H1'
import minimize from "./miscs/minimize";

const TopLand = ({data}) => {
    return (
        <Container
            className="container-fluid"
            style={{ backgroundImage: `url(${minimize(data.Background, 'large')})`}}
        >
            <div className="row">
                <div className="container">
                    <TextContainer>
                        <LinedText white>{data.Caption && data.Caption}</LinedText>
                        <H1>
                            {data.Title && data.Title.includes('|') ? <SemiBold data={data.Title}/> : <strong style={{fontWeight: 'bold'}}>{data.Title}</strong>}
                        </H1>
                        <P>{data.Description && data.Description}</P>
                    </TextContainer>
                </div>
            </div>
        </Container>
    );
};

export default TopLand;

const Container = styled.div`
    color:white;
    background-size: cover;
    .row{
        background-color: rgba(0,0,0,0.5);
    }
    @media only screen and (max-width: 768px){
        h1{
            font-size: ${props=>props.theme.fontSizeBigM};
        }

    }
`;

const TextContainer = styled.div`
    padding-top: 30vh;
    padding-bottom:15vh;
`

const P = styled.div `
    max-width:500px;
    @media only screen and (max-width: 768px){
        font-size: ${props=>props.theme.fontSizeM};
    }
`

const SemiBold = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong style={{fontWeight:"bold"}}>{prepare[0]}</strong>{prepare[1]}
        </>
    )
}