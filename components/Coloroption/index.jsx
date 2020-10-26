import React, {useState} from 'react'
import styled from 'styled-components';
import React360 from './React360';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import { useContext } from "react";

function Coloroption({data}) {

    const {serverUrl} = useContext(MenuContext);

    const [selected, set] = useState(0);
    const [exterior, setExterior] = useState(true);
    console.log(data)
    const toggle = (e) => {
        Array.from(document.getElementsByClassName('toggles')).forEach(element => element.classList.remove('active'));
        if(e.target.tabIndex === 0){
            document.getElementById('exterior').classList.add('active');
            document.getElementById('info-con').classList.remove('active');
            return setExterior(true);
        }
        document.getElementById('info-con').classList.add('active');
        document.getElementById('interior').classList.add('active');
        return setExterior(false);
    }
    return (
        <Container>
            {exterior ?
                <React360 serverUrl={serverUrl} data={data.Options[selected].Exterior360} numImages={data.Options[selected].Exterior360.length} />
            :
            <iframe id="vr" style={{borderStyle:'none'}}
            src={`https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${data.Options[selected].Interior360}&autoLoad=true`}></iframe>
            }
            <div id="info-con">
                <h5>Deep Black Pearl</h5>
                {exterior ? 
                <div className="color-options">
                    {data.Options.map((el,i)=>{
                        return(
                            <div className="colors" key={el.id} onClick={()=>set(i)} >
                                <div className="color" style={{backgroundColor: el.ColorCode}}></div>
                            </div>
                        )
                    })}
                </div>
                :
                <p style={{textAlign:'center'}}>Toggle "Exterior" view in order to change the color options</p>}
                <div className="choice-con">
                    <button className="toggles active" id="exterior" onClick={toggle} tabIndex={0} >Exterior</button>
                    <button className="toggles" id="interior" onClick={toggle} tabIndex={1}>Interior</button>
                </div>
            </div>
            
        </Container>
    )
}

export default Coloroption

const Container = styled.div`
    position: relative;
    #info-con {
        position: absolute;
        bottom: 7px;
        left: 0;
        right: 0;
        padding-bottom: 5vh;
        padding-top: 5vh;
        transition: 0.5s ease;
        &.active {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
        }

        h5 {
            text-align: center;
        }
        .color-options {
            width: fit-content;
            width: -moz-fit-content;
            margin: 0px auto;
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
            .colors {
                border-color: inherit !important;
                border: 1px solid;
                padding: 6px;
                border-radius: 50%;
                margin-right: 7.5px;
                margin-left: 7.5px;
                &:hover {
                    cursor: pointer;
                    .color {
                        transform: scale(1.2);
                    }
                }
                .color {
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    transition: 0.3s ease;
                }
            }
        }
        .choice-con {
            display: flex;
            flex-direction: row;
            width: fit-content;
            width: -moz-fit-content;
            margin: 0px auto;
            button {
                border-radius: 20px;
                padding: 5px 30px;
                margin-left: 7.5px;
                margin-right: 7.5px;
                outline: none;
                transition: 0.3s ease;
                border:1px solid rgba(0,0,0,0.1);
                color:black;
                &.active {
                    background-color: black;
                    color: white;
                    border: 1px solid rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
    .react360 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh !important;
        background: linear-gradient(
            138deg,
            rgb(202, 201, 195) 0%,
            rgb(240, 239, 234) 63%
        );
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        &:before {
            content: " ";
            background-image: url("/img/right-arrow.png");
            transform: rotate(180deg);
            width: 146px;
            height: 53px;
            background-size: 100% 100%;
            background-repeat: no-repeat !important;
            background-position: center center !important;
            position: absolute;
            left: 20vw;
            image-rendering: -webkit-optimize-contrast;
        }
        &:after {
            content: " ";
            background-image: url("/img/left-arrow.png");
            transform: rotate(180deg);
            width: 146px;
            height: 53px;
            background-size: 100% 100%;
            background-repeat: no-repeat !important;
            background-position: center center !important;
            position: absolute;
            right: 20vw;
            image-rendering: -webkit-optimize-contrast;
        }
    }

    .icon-react360 {
        height: 4em;
        position: relative;
        padding-top: 3em;
    }
    #vr {
        width: 100% !important;
        height: 100vh !important;
    }
    @media only screen and (max-width: 768px){
        .react360{
            height:60vh !important;
            align-items:flex-start;
            &:before{
                display:none;
            }
            &:after{
                display:none;
            }
        }
    }
`;
