import React from 'react';
import styled from 'styled-components';
import LinedText from '@/shared/LinedText';
import H1 from '@/shared/H1';
import Button from '@/shared/Button';
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const GetInTouch = ({data}) => {
    return (
        <Container style={{backgroundImage: 'url(http://nestin.bold-themes.com/smart/wp-content/uploads/sites/2/2020/01/Inner_contact.jpg)'}}>
                <div className="container">
                    <LinedText white>{data.Caption && data.Caption}</LinedText>
                    <div className="row">
                        <div className="col-md-5">
                            <H1>{data.Title && data.Title.includes("|") ? <SemiBold data={data.Title}/> : <strong style={{fontWeight:"bold"}}>{data.Title}</strong>}</H1>
                        </div>
                        <div className="col-md-7" style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <div className="row">
                                {data.RedButtonText && <div className="col-md-6" style={{display:'flex',justifyContent:'center'}}>
                                    <a href={`tel:${data.RedButtonLink}`}>
                                        <Button red>
                                            <BsPhone/>
                                            <div>
                                                <small>{data.RedButtonText}</small>
                                                <h4>{data.RedButtonLink}</h4>
                                            </div>
                                        </Button>
                                    </a>
                                </div>}
                                {data.ButtonText && <div className="col-md-6" style={{display:'flex',justifyContent:'center'}}>
                                    <a href={`mailto: ${data.ButtonLink}`}>
                                        <Button dark>
                                            <AiOutlineMail/>
                                            <div>
                                                <small>{data.ButtonText}</small>
                                                <h4>{data.ButtonLink}</h4>
                                            </div>
                                        </Button>
                                    </a>
                                </div>}
                                
                            </div>
                            
                        </div>  
                    </div>
                </div>
        </Container>
    );
};

export default GetInTouch;

const Container = styled.div `
    padding-top: 5vh;
    padding-bottom: 5vh;
    color:white;
    margin-top:10vh;
    h1{
        margin-bottom:0px;
        font-size: ${props=>props.theme.fontSizeBig2}
    }
    button{
        display:flex;
        color:white;
        align-items:center;
        float:left;
        margin-left: 15px;
        height:fit-content;
        height:-webkit-fit-content;
        &:first-child{
            margin-left:0px;
        }
        svg{
            margin-right:15px;
            font-size:40px;
        }
        small{
            display:block;
            margin-bottom:5px;
        }
        h4{
            margin-bottom:0px;
            font-weight:bold;
        }
    }
`

const SemiBold = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong style={{fontWeight:"bold"}}>{prepare[0]}</strong>{prepare[1]}
        </>
    )
}