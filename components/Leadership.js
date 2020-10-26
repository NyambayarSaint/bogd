import React from "react";
import styled from "styled-components";
import LinedText from "@/shared/LinedText";
import H1 from "@/shared/H1";
import Button from "@/shared/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import minimize from "./miscs/minimize";

const Leadership = ({data}) => {
    useEffect(() => {
        const vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
        if(vw > 768){
            setTimeout(()=>{
                let bott = document.querySelector(".bott");
                let img = document.querySelector("#pr");
                let tmp =
                    bott.getBoundingClientRect().bottom -
                    img.getBoundingClientRect().bottom;
                let val = tmp > -200 && tmp < -100;
                val
                    ? (img.style.marginTop = tmp + "px")
                    : (img.style.marginTop = "150px");
            },1000)
        }   
    }, []);

    return (
        <Container className="container">
            <div className="row" style={{paddingBottom: '10vh'}} >
                <div className="col-md-6">
                    <LinedText red>{data.Caption && data.Caption}</LinedText>
                    <H1>
                        {data.Title && data.Title.includes('|') ? <SemiBold data={data.Title}/> : <strong style={{ fontWeight: "bold" }}>{data.Title}</strong>}
                    </H1>
                    <P style={{ marginBottom: 30 }}>{data.Description && data.Description}</P>
                    <img
                        style={{ height: 80 }}
                        src={minimize(data.Signature, 'medium')}
                    />
                    <Ptitle>{data.Name && data.Name}</Ptitle>
                    <p style={{ marginBottom: 50 }}>{data.Position && data.Position}</p>
                    {data.ButtonText && <a href={data.ButtonLink || "#"}><Button className="bott" red>{data.ButtonText} <IoIosArrowRoundForward /></Button></a>}
                </div>
                <div className="col-md-6">
                    <Img
                        id="pr"
                        style={{ width: "100%" }}
                        src={minimize(data.Avatar, 'medium')}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Leadership;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 5vh;
`;

const P = styled.div`
    max-width: 500px;
`;
const Ptitle = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.mainRed};
    margin-bottom: 0px;
`;

const Img = styled.img`
    width: 100%;
    margin-top: 0px;
    transition: 1s ease;
`;

const SemiBold = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong style={{fontWeight:"bold"}}>{prepare[0]}</strong>{prepare[1]}
        </>
    )
}