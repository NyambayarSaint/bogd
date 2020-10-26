import React from 'react';
import styled from 'styled-components';
import H1 from '@/components/shared/H1';
import minimize from './miscs/minimize';

const Fullsided = ({data}) => {
    return (
        <Container left={data.LeftSided}>
            <div className="offscreen left"></div>
            <div className="offscreen right" style={{backgroundImage:`url(${minimize(data.Image, 'large')})`}}></div>
            <div className="absolute">
                <H1>{data.Title && data.Title.includes("|") ? <SemiBreak data={data.Title}/> : data.Title}</H1>
                <p>{data.Description && data.Description}</p>
            </div>
        </Container>
    );
};

export default Fullsided;

const Container = styled.div `
    width:100vw;
    height:100vh;
    display:flex;
    position:relative;
    flex-direction: ${props => props.left ? "row" : "row-reverse"};
    .left{
        flex:1;
    }
    .right{
        background:grey;
        flex:2;
        background-size:cover;
        background-position:center center;
        background-repeat:no-repeat;
    }
    .absolute{
        position:absolute;
        top:10vh;
        bottom:10vh;
        width:40vw;
        background:#f7f7f7;
        display:flex;
        padding: 5vw 5vh;
        flex-direction:column;
        justify-content:space-around;
        ${props => props.left ? "left:0" : "right:0"};
        h1{
            font-family: Second;
            ${props => props.left && "text-align:right"};
        }
        p{
            ${props => props.left && "text-align:right"};
        }
    }
    @media (max-width: 768px) {
        height:auto !important;
        display:block;
        .absolute{
            position:unset !important;
            width:unset !important;
        }
        .right{
            height:50vh;
        }
        h1{
            font-size: ${({theme})=>theme.fontSizeBigM};
        }
    }
`

const SemiBreak = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            {prepare[0]}<br/>{prepare[1]}
        </>
    )
}