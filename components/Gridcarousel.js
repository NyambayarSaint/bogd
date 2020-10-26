import React from "react";
import styled from "styled-components";
import LinedText from "@/shared/LinedText";
import H1 from "@/shared/H1";
import Button from "@/shared/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import minimize from "./miscs/minimize";

const Goals = ({data}) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Container className="container">
            {data.LeftSide ?
                <div className="row">
                    <div className="col-md-6 centerize">
                        <LinedText red>{data.Caption && data.Caption}</LinedText>
                        <H1 style={{width:'80%'}}>{data.Title && data.Title.includes("|") ? <SemiBold data={data.Title}/> : <strong style={{ fontWeight: "bold" }}>{data.Title}</strong>}</H1>
                        <P style={{ marginBottom: 30 }}>{data.Description && data.Description}</P>
                        {data.ButtonText && <a href={data.ButtonLink && data.ButtonLink}><Button red>{data.ButtonText} <IoIosArrowRoundForward /></Button></a>}
                    </div>
                    <div className="col-md-6" style={{alignItems: 'center', display: 'flex'}}>
                            <Slider {...settings} style={{width:'100%'}}>
                                {data.Carousel.map((el,i)=><ImgBox key={i+el.Image && el.Image.url}><img src={minimize(el.Image, 'medium')} /></ImgBox>)}
                            </Slider>
                    </div>
                </div>
            :
                <div className="row">
                    <div className="col-md-6" style={{alignItems: 'center', display: 'flex'}}>
                            <Slider {...settings} style={{width:'100%'}}>
                                {data.Carousel.map((el,i)=><ImgBox key={i+el.Image && el.Image.url}><img src={minimize(el.Image, 'medium')} /></ImgBox>)}
                            </Slider>
                    </div>
                    <div className="col-md-6 centerize flexize">
                        <LinedText red>{data.Caption && data.Caption}</LinedText>
                        <H1 style={{width:'80%'}}>{data.Title && data.Title.includes("|") ? <SemiBold data={data.Title}/> : <strong style={{ fontWeight: "bold" }}>{data.Title}</strong>}</H1>
                        <P style={{ marginBottom: 30 }}>{data.Description && data.Description}</P>
                        {data.ButtonText && <a href={data.ButtonLink && data.ButtonLink}><Button red>{data.ButtonText} <IoIosArrowRoundForward /></Button></a>}
                    </div>
                </div>
            }
        </Container>
    );
};

export default Goals;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 5vh;
    .centerize{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .flexize{
        align-items:flex-end;
        text-align:right;
    }
    .slick-slider{
        .slick-arrow{
            display:none !important;
        }
    }
    .slick-dots{
        padding:0px;
        display:flex !important;
        justify-content:center;
        margin-top:10px;
        li{
            margin:0px 5px;
            button{
                border:none;
            }
            &.slick-active{
                button{
                    font-weight:bold;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        h1{
            font-size: ${props=>props.theme.fontSizeBigM};
        }
    }
`;

const P = styled.div`
    max-width: 500px;
    font-size:18px;
`;
const ImgBox = styled.div`
    background-size: cover;
    background-position: center center;
    background-repeat: none;
    width: 100%;
    height: 100%;
    img{
        width:100%;
    }
`;

const SemiBold = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong style={{fontWeight:"bold"}}>{prepare[0]}</strong>{prepare[1]}
        </>
    )
}