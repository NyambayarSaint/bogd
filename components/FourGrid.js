import React from "react";
import styled from "styled-components";
import { GiNewspaper } from "react-icons/gi";
import {BsArrowRight} from 'react-icons/bs';
import {IoIosConstruct} from 'react-icons/io';
import {FaHardHat, FaToolbox} from 'react-icons/fa';

const FourGrid = () => {
    return (
        <Container className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="box">
                        <GiNewspaper />
                        <p className="title">RESIDENTITAL DEVELOPMENT</p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity.
                        </p>
                        <button>
                            <BsArrowRight/>
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <IoIosConstruct />
                        <p className="title">RESIDENTITAL DEVELOPMENT</p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity.
                        </p>
                        <button>
                            <BsArrowRight/>
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <FaHardHat />
                        <p className="title">RESIDENTITAL DEVELOPMENT</p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity.
                        </p>
                        <button>
                            <BsArrowRight/>
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <FaToolbox />
                        <p className="title">RESIDENTITAL DEVELOPMENT</p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity.
                        </p>
                        <button>
                            <BsArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FourGrid;

const Container = styled.div`
    padding-top: 5vh;
    padding-bottom: 5vh;
    .box{
        svg{
            font-size:70px;
            margin-bottom:20px;
        }
        .title{
            color:${props=>props.theme.mainRed};
            font-weight:400;
        }
        button{
            border:none;
            height:auto;
            padding:0px;
            svg{
                font-size:30px;
                margin:0px;
            }
        }
    }
`;
