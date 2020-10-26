import React from 'react';
import styled from 'styled-components';
import LinedText from '@/shared/LinedText';
import {BsHouseDoor} from 'react-icons/bs'
import minimize from './miscs/minimize';

const CardFeature = ({data}) => {
    return (
        <Container className="container">
            <div className="row">
                {data.Cards.map((el,i)=>{
                    return(
                        <div className="col-md-4" key={'cards'+i}>
                            <div className={`box ${el.Special && "red"}`}>
                                <div className="top">
                                    <img src={minimize(el.Single, 'small')} />
                                </div>
                                <div className="bottom">
                                    <LinedText className="linedtext" white>{el.Caption && el.Caption}</LinedText>
                                    <h4>{el.Title && el.Title}</h4>
                                    <p>{el.Description && el.Description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
};

export default CardFeature;

const Container = styled.div `
    padding-top: 5vh;
    padding-bottom: 5vh;

    .box{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${props => props.theme.mainDark};
        color:white;
        padding:25px;
        .top{
            margin-bottom:5vh;
            text-align:right;
            img{
                width:40px;
            }
        }
        .bottom{
            h4{
                font-size:30px;
                font-weight:300;
                margin-bottom:20px;
            }
            .linedtext{
                font-weight:300;
            }
        }
    }
    .box.red{
        background-color: ${props => props.theme.mainRed};
    }

`