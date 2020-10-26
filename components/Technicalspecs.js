import React from 'react';
import minimize from '@/miscs/minimize'
import styled from 'styled-components';

const Technicalspecs = ({data}) => {
    return (
        <Container>
    <h2 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '30px' }}>{data.Title}</h2>
                <div className="row">
                    <div className="col-md-5 left">
                        <div className="img"
                            style={{ backgroundImage: `url(${minimize(data.Image, 'small')})` }}
                        >
                            <span>{data.Height}</span>
                            <div className="dimension-vertical">
                                <div className="horzone">
                                    <div className="core"></div>
                                </div>
                            </div>
                        </div>
                        <div className="dimension">
                            <div className="horzone">
                                <div className="core"></div>
                            </div>
                            <p>{data.Wheel}</p>
                        </div>
                        <div className="dimension big">
                            <div className="horzone">
                                <div className="core"></div>
                            </div>
                            <p>{data.Lenght}</p>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-1 right">
                        <div className="specs">
                            {data.Specs.map(el=>(
                                <div className="rows" key={Math.random()}><span>{el.Name}</span><p>{el.Description}</p></div>
                            ))}
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Technicalspecs;

const Container = styled.div`
    padding-left:10vw;
    padding-right:10vw;
    font-size: $fs-small;
    .left {
        .dimension {
            width: 53%;
            margin: 0px auto;
            .horzone {
                height: 10px;
                border-left: 1px solid rgba(0, 0, 0, 0.3);
                border-right: 1px solid rgba(0, 0, 0, 0.3);
                position: relative;
                .core {
                    height: 1px;
                    background-color: rgba(0, 0, 0, 0.3);
                    position: absolute;
                    width: 100%;
                    top: 5px;
                }
            }
            p {
                margin-bottom: 5px;
                text-align: center;
            }
            &.big {
                width: 100%;
            }
        }
        .img {
            height: 240px;
            background-size: cover;
            background-position: center;
            position: relative;
            span {
                float: right;
                margin-right: 10px;
            }
            .dimension-vertical {
                position: absolute;
                top: 0;
                right: 0;
                width: 1px;
                height: 100%;
                .horzone {
                    height: 100%;
                    width: 11px;
                    border-top: 1px solid rgba(0, 0, 0, 0.3);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
                    .core {
                        width: 1px;
                        margin-left: 5.5px;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                }
            }
        }
    }
    .right {
        margin-bottom:30px;
        .specs {
            border-top: 1px solid black;
            .rows {
                border-bottom: 1px solid rgba(0, 0, 0, 0.3);
                span,
                p {
                    width: 50%;
                    margin: 0px;
                    padding: 10px 0px;
                    display: inline-block;
                }
                span {
                    opacity: 0.7;
                    padding-right: 30px;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        padding-left:8px;
        padding-right:8px;
        .row{
            margin:0px;
        }
        h2{
            font-size:${({theme})=>theme.fontSizeMedium};
        }
        .left{
            margin-bottom:30px;
        }
        .right{
            padding-top:15px;
            .specs{
                border-top:1px solid rgba(0,0,0,0.3);
            }
        }
    }
`;
