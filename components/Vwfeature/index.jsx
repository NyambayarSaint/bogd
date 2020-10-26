import React, { useState } from 'react';
import styled from 'styled-components';
import Concept from './Concept';

const Features = ({data}) => {
    data = data.Features2
    const [stateData, set] = useState({loaded: true, data: data[0]});
    const handler = (e) => {
        Array.from(document.getElementsByClassName('tabs')).forEach(el=>el.classList.remove('active'))
        e.target.classList.add('active');
        set({loaded: true, data: data[e.target.tabIndex]})
    }
    return (
        <Container>
                <h2 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '30px' }}>Features</h2>
                <div className="tab-buttons">
                    {data.map((el,i)=>i === 0 ? <li tabIndex={i} onClick={handler} key={el.id} className="active tabs">{el.Name}</li> : <li className="tabs" tabIndex={i} onClick={handler} key={el.id}>{el.Name}</li>)}
                </div>
                {stateData.loaded ? <Concept data={stateData.data.Grid2} /> : 'Loading...'}
        </Container>
    );
};

export default Features;

const Container = styled.div`
    padding-left:10vw;
    padding-right:10vw;
    .tab-buttons {
        margin-bottom: 45px;
        display: flex;
        justify-content: flex-start;
        box-shadow: 5px 4px 10px 0 rgba(0, 0, 0, 0.2);
        li {
            list-style-type: none;
            font-size: $fs-small;
            padding: 15px 15px;
            position: relative;
            overflow: hidden;
            &:hover {
                cursor: pointer;
                &:after {
                    left: 15px;
                }
            }
            &.active {
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                &:after {
                    background-color: white !important;
                }
            }
            &:after {
                content: " ";
                transition: 0.3s ease-out;
                display: block;
                left: -100%;
                width: 70%;
                height: 1px;
                background-color: black;
                position: absolute;
            }
        }
    }
    .Concept {
        .grid {
            margin-right: 15px;
            .img {
                height: 260px;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }
            .content {
                padding: 30px 15px;
                button {
                    border: none;
                    background-color: rgba(0, 0, 0, 0.15);
                    padding: 10px 30px;
                    transition: 0.3s ease-out;
                    &:before {
                        display: inline-block;
                        font-style: normal;
                        font-variant: normal;
                        text-rendering: auto;
                        -webkit-font-smoothing: antialiased;
                        font-family: "Font Awesome 5 Free";
                        font-weight: 600;
                        content: "\f105";
                        margin-right: 10px;
                    }
                    &:hover {
                        background: $main-red;
                        color: white;
                    }
                }
            }
        }
        .review {
            .close {
                position: absolute;
                right: 0;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        padding-left:8px;
        padding-right:8px;
        h2{
            font-size: ${({theme})=>theme.fontSizeMedium};
        }
        .tab-buttons{
            li{
                padding:8px 10px;
            }
        }
        .Concept{
            .grid{
                margin-right:0px;
            }
            .close{
                right:10px !important;
            }
        }
        .col-md-4{
            margin-left:0px;
            img{
                margin-bottom:15px;
            }
        }
        .content{
            h1,h2,h3,h4,h5,h6{
                font-size: ${({theme})=>theme.fontSizeMedium};
            }
        }
    }
`;
