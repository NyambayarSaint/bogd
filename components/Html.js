import React from 'react';
import styled from 'styled-components';
import {Parser} from 'html-to-react'
const parser = new Parser();

const Html = ({data}) => {
    return (
        <Container container={data.Container}>
            <div>{parser.parse(data.Html)}</div>
        </Container>
    );
};

export default Html;

const Container = styled.div `
    ${({container})=>container && `
        padding-left:10vw;
        padding-right:10vw;
    `};
    @media only screen and (max-width: 768px){
        padding-left:8px;
        padding-right:8px;
    }
`