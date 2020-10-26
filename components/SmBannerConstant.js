import React from 'react';
import styled from 'styled-components';
import Slug from '@/miscs/Slug';

const SmBannerConstant = () => {
    return (
        <Container className="container-fluid" style={{backgroundImage: 'url(https://ubitec.mx/wp-content/uploads/2020/01/ubitec-flotillas-1.jpg)'}}>
            <div className="row">
                <div className="col-md-12 bottom">
                    <h1> </h1>
                </div>
            </div>
        </Container>
    );
};

export default SmBannerConstant;

const Container = styled.div `
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    .row{
        background: rgba(0,0,0,0.6);
    }
    .bottom{
        padding-top:10vh;
        padding-bottom:10vh;
        color:white;
        h1{
            text-align:center;
            font-weight:300;
            font-size: ${props => props.theme.fontSizeBig};
        }
        .Slug{
            text-align:center;
        }
    }
    @media (max-width: 768px){
        .top{
            height:170px !important;
        }
        .bottom{
            padding:15px;
        }
        h1{
            font-size:${({theme})=>theme.fontSizeBigM} !important;
            margin-bottom:15px !important;
            text-transform:uppercase;
        }
        .Slug{
            display:none;
        }
    }
`