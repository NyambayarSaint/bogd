import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LinedText from "@/shared/LinedText";
import H1 from "@/shared/H1";
import Button from "@/shared/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import minimize from "./miscs/minimize";
import Carousel from '@brainhubeu/react-carousel';
import "@/core/brainhubeau.scss";

const Goals = ({data}) => {
    const [selected, setSelected] = useState(data.Tabs[0]);
    const setHandler = (e, title) => {
        let list = e.target.parentElement.parentElement.children
        Array.from(list, e=>e.classList.remove('active'));
        e.target.parentElement.classList.add('active');
        setSelected(data.Tabs[e.target.tabIndex]);
        window.Erxes.updateCustomerProperty(`Ө.З.Б-${Math.floor(Math.random() * 100)}`, title);
    }
    useEffect(()=>{
        document.querySelector('.BrainhubCarouselItem').classList.add('active');
        const trackErxes = () => {
            var script = document.createElement('script');
            script.src = "https://erxes.tavanbogd.mn/widgets/build/eventsWidget.bundle.js";
            script.async = true;
            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);
        }
        trackErxes();
    },[])
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
            <Carousel className="Selectionswitch row"
            slidesPerPage={data.Tabs.length < 5 ? data.Tabs.length : 4} numberOfSlides={1} animationSpeed={1000}
                breakpoints={{ 768: { slidesPerPage: 3 } }}>
                {data.Tabs.map((el,i)=><div onClick={(e)=>setHandler(e,el.Title)} summary={el.Title} tabIndex={i} key={i+el._id}>{el.Title}</div>)}
            </Carousel>
            
            {selected.LeftSide ?
                <div className="row">
                    <div className="col-md-6 centerize">
                        <LinedText red>{selected.Caption && selected.Caption}</LinedText>
                        <H1 style={{width:'80%'}}>{selected.Title && selected.Title.includes("|") ? <SemiBold data={selected.Title}/> : <strong style={{ fontWeight: "bold" }}>{selected.Title}</strong>}</H1>
                        <P style={{ marginBottom: 30 }}>{selected.Description && selected.Description}</P>
                        {selected.ButtonText && <a href={selected.ButtonLink && selected.ButtonLink}><Button red>{selected.ButtonText} <IoIosArrowRoundForward /></Button></a>}
                    </div>
                    <div className="col-md-6" style={{alignItems: 'center', display: 'flex'}}>
                            <Slider {...settings} style={{width:'100%'}}>
                                {selected.Images.map((el,i)=><ImgBox key={i+el && el.url}><img src={minimize(el, 'medium')} /></ImgBox>)}
                            </Slider>
                    </div>
                </div>
            :
                <div className="row">
                    <div className="col-md-6" style={{alignItems: 'center', display: 'flex'}}>
                            <Slider {...settings} style={{width:'100%'}}>
                                {selected.Images.map((el,i)=><ImgBox key={i+el && el.url}><img src={minimize(el, 'medium')} /></ImgBox>)}
                            </Slider>
                    </div>
                    <div className="col-md-6 centerize flexize">
                        <LinedText red>{selected.Caption && selected.Caption}</LinedText>
                        <H1 style={{width:'80%'}}>{selected.Title && selected.Title.includes("|") ? <SemiBold data={selected.Title}/> : <strong style={{ fontWeight: "bold" }}>{selected.Title}</strong>}</H1>
                        <P style={{ marginBottom: 30 }}>{selected.Description && selected.Description}</P>
                        {selected.ButtonText && <a href={selected.ButtonLink && selected.ButtonLink}><Button red>{selected.ButtonText} <IoIosArrowRoundForward /></Button></a>}
                    </div>
                </div>
            }
        </Container>
    );
};

export default Goals;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 6vh;

    .Selectionswitch{
        margin-bottom:30px;
        li{
            div{
                background:rgba(0,0,0,0.1);
                padding:15px 30px;
                width:100%;
                margin-right:15px;
                margin-left:15px;
                &:hover{
                    cursor:pointer;
                }
            }
        }
        li.active{
            div{
                background: ${props => props.theme.mainRed};
                color:white;
            }
        }
    }

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
    @media (max-width: 768px) {
        h1{
            font-size: ${({theme})=>theme.fontSizeBigM};
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