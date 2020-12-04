import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = ({data}) => {
    return (
        <Container background={data && data.Background && data.Background} color={data && data.color && data.color} width={data && data.width && data.width}>
            {data.Url && data.Url.includes('.') ?
                <a target="__blank" href={data.Url ? data.Url : '/404'}><button>{data && data.Title && data.Title}</button></a>
            :
                <Link href={data.Url ? data.Url : '/404'}><a><button>{data && data.Title && data.Title}</button></a></Link>
            }
        </Container>
    );
};

export default Button;

const Container = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    button{
        background:none;
        border:1px solid rgba(0,0,0,0.1);
        padding:15px 30px;
        ${({background})=>background ? `
            background: ${background};
        `: `background: ${({theme})=>theme.colorOne}`};
        ${({width})=>width && `
            width: ${width};
        `};
        ${({color})=>color && `
            color: ${color};
        `};
    }
`