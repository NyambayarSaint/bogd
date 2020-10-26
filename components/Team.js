import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@/core/carouselSlider.scss";
import minimize from "./miscs/minimize";

const Team = ({data}) => {
    let {Employees} = data
    return (
        <Container className="container">
            <div className="row">
                <Carousel
                    draggable={false}
                    slidesPerPage={3}
                    infinite
                    autoPlay={4000}
                    animationSpeed={1000}
                    breakpoints={{ 768: { slidesPerPage: 1 } }}
                    stopAutoPlayOnHover={true}
                >
                    {Employees.map((el,i)=>{
                        return(
                            <Person key={i+el.Image && el.Image.url}>
                                <img src={minimize(el.Image, 'medium')} />
                                <div>
                                    <h4>{el.Name && el.Name}</h4>
                                    <p>{el.Position && el.Position}</p>
                                </div>
                            </Person>
                        )
                    })}
                </Carousel>
            </div>
        </Container>
    );
};

export default Team;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 5vh;
`;
const Person = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    img {
        width: 100%;
    }
    div{
        position:absolute;
        width: 85%;
        bottom:0;
        right:15px;
        background:rgba(255,255,255,0.9);
        border-left: 3px solid ${props => props.theme.mainRed};
        padding:15px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        h4{
            font-weight:500;
            margin-bottom:0px;
        }
        p{
            margin-bottom:0px;
        }
    }
    @media (max-width: 768px) {
        padding-right:0px;
    }
`;
