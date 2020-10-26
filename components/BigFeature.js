import React from 'react';
import styled from 'styled-components';
import LinedText from '@/shared/LinedText';
import H1 from '@/shared/H1';
import Button from '@/shared/Button';
import {BsArrowRight} from 'react-icons/bs';
import {AiOutlineDownload} from 'react-icons/ai';

const BigFeature = () => {
    return (
        <Container className="container-fluid" style={{backgroundImage: 'url(http://nestin.bold-themes.com/smart/wp-content/uploads/sites/2/2020/01/background_02.jpg)'}}>
            <div className="row">
                <div className="col-md-12 pad"></div>
                <div className="col-md-7">

                </div>
                <div className="col-md-5 right">
                    <div className="box">
                        <LinedText red>NEW PROJECT</LinedText>
                        <H1><strong>457/<br/></strong>Real Street</H1>
                        <div className="detail">
                            <div className="line">
                                <span>START DATE</span>
                                <span>August 17th 2020</span>
                            </div>
                            <div className="line">
                                <span>FINISH DATE</span>
                                <span>July 14th 2022</span>
                            </div>
                            <div className="line">
                                <span>INVESTOR</span>
                                <span>Nestin group inc.</span>
                            </div>
                            <div className="line">
                                <span>SQM</span>
                                <span>55678</span>
                            </div>
                        </div>
                        <Button>View more <BsArrowRight/></Button>
                        <Button red>Download Pdf <AiOutlineDownload/></Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BigFeature;

const Container = styled.div `
    margin-top:5vh;
    margin-bottom:5vh;
    background-size: cover;
    background-position:center center;
    .pad{
        height:15vh;
    }
    .right{
        background:white;
        border-left:${props=>props.theme.mainRed} 5px solid;
        .box{
            padding: 5vh 30px;
            h1{
                font-size: ${props => props.theme.fontSizeBig2};
            }
            .detail{
                margin-top:10vh;
                margin-bottom:14vh;
                .line{
                    border-top:1px solid rgba(0,0,0,0.2);
                    padding-top:8px;
                    padding-bottom:8px;
                    display:flex;
                    justify-content:space-between;
                    &:last-child{
                        border-bottom:1px solid rgba(0,0,0,0.2);
                    }
                    span{
                        &:first-child{
                            font-weight:400;
                        }
                    }
                }
            }
            button{
                margin-right:15px;
            }
        }
    }
`