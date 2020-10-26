import React from "react";
import styled from "styled-components";
import H1 from "@/shared/H1";
import minimize from "./miscs/minimize";

const LinedGrid = ({data}) => {
    return (
        <Container
            style={{
                backgroundImage:
                    `url(${minimize(data.Background, 'large')})`,
            }}
        >
            <div id="Linedgrid-opacity">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left">
                            <H1>
                                {data.Title && data.Title.includes("|") ? <SemiBreak data={data.Title}/>:data.Title}
                            </H1>
                            <p>{data.Description && data.Description}</p>
                        </div>
                        <div className="col-md-6 right">
                            {data.DueDateLines.map((el,i)=>{
                                return(
                                    <div className="lined" key={'linedgrid'+i}>
                                        <p>{el.Caption}</p>
                                        <div className="bar">
                                            <div className="fill" style={{width: `${el.Progress}%`}}>
                                                <span>{el.ProgressText}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LinedGrid;

const Container = styled.div`
    background-size: cover;
    background-position:center center;
    color:white;
    #Linedgrid-opacity{
        background:rgba(0,0,0,0.8);
        padding-top:10vh;
        padding-bottom:10vh;
    }
    .left{
        p{
            width:90%;
        }
    }
    .right{
        display:flex;
        justify-content:center;
        flex-direction: column;
        .lined{
            margin-bottom:20px;
            p{
                margin-bottom:5px;
            }
            .bar{
                background: rgba(255,255,255,0.5);
                padding:4.5px 5px;
                .fill{
                    background: white;
                    height:8px;
                    position:relative;
                    transition:0.5s ease;
                    span{
                        position:absolute;
                        right:-20px;
                        top:24px;
                        background: ${props => props.theme.mainRed};
                        padding:0px 4px;
                        &:after{
                            content: '';
                            width: 0; 
                            height: 0; 
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                            
                            ${'' /* border-bottom: 5px solid black; */}
                            position:absolute;
                            margin-left:-22px;
                            margin-top:-5px;
                            border-bottom: 5px solid ${props=>props.theme.mainRed};
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        h1{
            font-size: ${({theme})=>theme.fontSizeBigM};
            text-transform:uppercase;
        }
    }
`;

const SemiBreak = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong>{prepare[0]}</strong><br/>{prepare[1]}
        </>
    )
}