import React from 'react';
import styled from 'styled-components';
import H1 from '@/shared/H1';
import Button from '@/shared/Button';
import {BsArrowRight} from 'react-icons/bs'

const Newsgrid = () => {
    return (
        <Container className="container">
            <div className="top">
                <H1><strong>News</strong> & Updates</H1>
                <Button>
                    View all <BsArrowRight/>
                </Button>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="box" style={{backgroundImage: 'url(http://nestin.bold-themes.com/smart/wp-content/uploads/sites/2/2018/09/post_03-640x960.jpg)'}}>
                        <div className="textbox">
                            <small>Real Estate</small>
                            <h4>Want to succeed in real estate? Focus on these habits.</h4>
                            <small>JANUARY 10, 2018 / BY BOLDTHEMES</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box" style={{backgroundImage: 'url(http://nestin.bold-themes.com/smart/wp-content/uploads/sites/2/2018/09/post_03-640x960.jpg)'}}>
                        <div className="textbox">
                            <small>Real Estate</small>
                            <h4>Want to succeed in real estate? Focus on these habits.</h4>
                            <small>JANUARY 10, 2018 / BY BOLDTHEMES</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box" style={{backgroundImage: 'url(http://nestin.bold-themes.com/smart/wp-content/uploads/sites/2/2018/09/post_03-640x960.jpg)'}}>
                        <div className="textbox">
                            <small>Real Estate</small>
                            <h4>Want to succeed in real estate? Focus on these habits.</h4>
                            <small>JANUARY 10, 2018 / BY BOLDTHEMES</small>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Newsgrid;

const Container = styled.div `
    padding-top: 5vh;
    padding-bottom: 5vh;
    .top{
        display:flex;
        justify-content: space-between;
        button{
            height: fit-content;
        }
        h1{
            margin-bottom:45px;
        }
    }
    .box{
        height:60vh;
        background-size: cover;
        background-position: center center;
        position: relative;
        .textbox{
            position: absolute;
            bottom:0;
            right:0;
            width:88%;
            background:rgba(255,255,255,0.9);
            padding:15px 30px;
            border-left:3px solid ${props => props.theme.mainRed};
            small{
                text-transform: uppercase;
                color: ${props => props.theme.mainRed};
            }
            h4{
                margin-top:6px;
            }
        }
    }
`