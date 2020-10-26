import React, { useEffect, useState } from "react";
import styled from "styled-components";
import H1 from "@/shared/H1";
import Button from "@/shared/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import minimize from "./miscs/minimize";

const StructureClick = ({data}) => {
    useEffect(() => {
        let element = document.querySelector(".box");
        let left = element.getBoundingClientRect().left;
        let minus = left - 15;
        let width = element.offsetWidth;
        element.style.width = minus + width + "px";
        element.style.marginLeft = "-" + minus + "px";
        element.style.height = element.offsetWidth * 0.6 + "px";
        document.querySelector(".opts").classList.add("active");
    }, []);

    const handleClick = (i) => {
        let list = document.querySelectorAll(".opts");
        for (let item of list) item.classList.remove("active");
        list[i].classList.add("active");
        setContent(i);
    };

    const [content, setContent] = useState(0);
    return (
        <Container className="container">
            <div className="row top">
                <div className="col-md-6">
                    <H1>
                        {data.Title && data.Title.includes("|") ? <SemiBold data={data.Title}/> : data.Title}
                    </H1>
                </div>
                <div
                    className="col-md-6"
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    {data.Button && <a href={data.Link && data.Link}><Button red>{data.Button} <AiOutlineDownload /></Button></a>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <div
                        className="box"
                        style={{
                            backgroundImage:
                                "url(" + minimize(data.Image, 'large') + ")",
                        }}
                    >
                        {data.Points.map((el, i) => {
                            return (
                                <span
                                    style={{
                                        left: el.CoordinateX,
                                        top: el.CoordinateY,
                                    }}
                                    key={"ck" + i}
                                    onClick={() => handleClick(i)}
                                >
                                    {i + 1}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="col-md-3">
                    <Options>
                        {data.Points.map((el, i) => {
                            return (
                                <li
                                    key={"str" + i}
                                    tabIndex={i}
                                    className="opts"
                                    onClick={() => handleClick(i)}
                                >
                                    <h5>
                                        <span>
                                            {i + 1} &nbsp; {el.Title && el.Title}
                                        </span>
                                        <span>
                                            <BsChevronDown />
                                        </span>
                                    </h5>
                                    {i === content ? (
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {el.Description && el.Description}
                                        </motion.p>
                                    ) : null}
                                </li>
                            );
                        })}
                    </Options>
                </div>
            </div>
        </Container>
    );
};

export default StructureClick;

const Container = styled.div`
    margin-top: 5vh;
    margin-bottom: 5vh;
    background-color: ${(props) => props.theme.lightGrey};
    padding: 5vh 2vw;
    .top {
        margin-bottom: 2vh;
    }
    h1 {
        strong {
            font-weight: bold;
            span {
                color: ${(props) => props.theme.mainRed};
            }
        }
    }
    button {
        height: fit-content;
    }
    .box {
        position: relative;
        height: 60vh;
        background-color: black;
        background-size: cover;
        background-position: center center;
        span {
            position: absolute;
            color: white;
            font-weight: bold;
            height: 30px;
            width: 30px;
            z-index:1;
            line-height: 30px;
            border-radius: 100%;
            text-align: center;
            background: ${(props) => props.theme.mainRed};
            transition: 0.3s ease;
            margin-left: -15px;
            margin-top: -15px;
            &:hover {
                opacity: 0.7;
                cursor: pointer;
            }
            &:after{
                content: "";
                background: rgba(208,0,0,0.5);
                width: 3em;
                height: 3em;
                position: absolute;
                top: -23%;
                left: -23%;
                border-radius: 50%;
                z-index:-1;

                animation: pulsate 1.2s ease-out;
                animation-iteration-count: infinite;
                opacity: 0;
            }
        }
        @keyframes pulsate {
            0% {
                -webkit-transform: scale(0.1, 0.1);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                -webkit-transform: scale(1.2, 1.2);
                opacity: 0;
            }
        }
        }
    }
    @media (max-width: 768px) {
        .row{
            margin-right:0px !important;
            padding:15px;
        }
        h1{
            font-size: ${({theme})=>theme.fontSizeBigM};
        }
        .top{
            margin-bottom:0px;
            .col-md-6{
                justify-content:flex-start;
                button{
                    padding:10px 20px;
                }
            }
        }
        
    }
`;

const Options = styled.div`
    li {
        padding: 2em 0px;
        outline: none;
        &:hover {
            cursor: pointer;
            h5 {
                color: ${(props) => props.theme.mainRed};
            }
        }
        &:first-child {
            border-top: 1px solid rgba(0, 0, 0, 0.3);
        }
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        h5 {
            font-weight: 300;
            display: flex;
            justify-content: space-between;
            margin-bottom: 0px;
        }
        p {
            margin: 0px;
            margin-top: 15px;
        }
        &.active {
            h5 {
                color: ${(props) => props.theme.mainRed};
            }
        }
    }
`;

const SemiBold = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong style={{fontWeight:"bold"}}><span>{prepare[0]}</span></strong>{prepare[1]}
        </>
    )
}