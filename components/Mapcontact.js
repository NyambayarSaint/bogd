import React, { useEffect, useContext } from "react";
import Map from "@/components/miscs/Map";
import styled from "styled-components";
import H1 from "@/shared/H1";
import {GoLocation} from 'react-icons/go';
import {BsPhone, BsArrowRight} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'
import Button from "@/shared/Button";
import {MenuContext} from '@/miscs/ContextMenuProvider'
import minimize from "./miscs/minimize";

const MapContact = ({data}) => {
    const {information} = useContext(MenuContext);
    useEffect(() => {
        const vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
        if (vw > 768) {
            let element = document.querySelector(".col-md-4");
            if(element){
                let left = element.getBoundingClientRect().left;
                let width = element.offsetWidth;
                document.querySelector(".box-map").style.marginLeft = left + "px";
                document.querySelector(".box-map").style.width = width + 45 + "px";
            }
            else{
                document.querySelector(".box-map").style.marginLeft = "20vw";
                document.querySelector(".box-map").style.width = "400px";
                document.querySelector(".box-map").style.maxWidth = "100%";
            }
        }
    }, []);
    return (
        <Container>
            <div className="box-map col-sm-12">
                <div className="box">
                    <div
                        className="img"
                        style={{
                            backgroundImage:
                                `url(${minimize(data.CardImage, 'medium')})`,
                        }}
                    ></div>
                    <div className="captions">
                        <H1>
                            {information.CompanyName}
                        </H1>
                        <div className="sect">
                            <GoLocation/>
                            <div>
                                <p>LOCATION</p>
                                <p>{information.Location}</p>
                            </div>
                        </div>
                        <div className="sect">
                            <BsPhone/>
                            <div>
                                <p>CONTACT</p>
                                <p>{information.Phone}</p>
                            </div>
                        </div>
                        <div className="sect">
                            <AiOutlineMail/>
                            <div>
                                <p>E MAIL</p>
                                <p>{information.Email}</p>
                            </div>
                        </div>
                        {data.Button && <a href={data.Link && data.Link}><Button red>{data.Button} <BsArrowRight/></Button></a>}
                    </div>
                </div>
            </div>
            <div className="mapcon">
                <Map center={{lat: information.Map.Latitude, lng: information.Map.Longtitude}} zoom={information.Map.Zoom} img={minimize(information.Logo, 'small')} />
            </div>
        </Container>
    );
};

export default MapContact;

const Container = styled.div`
    display:flex;
    align-items: center;
    .mapcon {
        height: 90vh;
        width: 100%;
    }
    .box-map {
        position: absolute;
        z-index: 1;
        .box {
            background: white;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);
            .img {
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                height: 200px;
            }
            h1 {
                font-size: ${(props) => props.theme.fontSizeMedium};
                padding-top: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                margin-bottom:0px;
            }
            .captions{
                padding:0px 30px 15px;
                .sect{
                    display:flex;
                    padding-top:20px;
                    padding-bottom:20px;
                    align-items:center;
                    border-bottom:1px solid rgba(0,0,0,0.1);
                    svg{
                        font-size:${props => props.theme.fontSizeMedium};
                        margin-right:15px;
                        color: ${props=>props.theme.mainRed};
                    }
                    p{
                        margin-bottom:0px;
                        &:first-child{
                            font-weight:400;
                            color: ${props=>props.theme.mainRed};
                        }
                    }
                }
                button{
                    margin-top:20px;
                    margin-bottom:20px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .box-map{
            position:relative;
            padding:0px;
        }
        .mapcon{
            display:none;
        }
    }
`;
