import React from 'react';
import styled from 'styled-components';
import {BsHouseDoor} from 'react-icons/bs';
import minimize from './miscs/minimize';

const Manygrids = ({data}) => {
    return (
        <Container>
            {data.SingleGrids.map((el,i)=>{
                return(
                    <div className="box" key={'singlegrids'+i}>
                        <img src={minimize(el.Image, 'small')}/>
                        {el.Title && <p><strong>{el.Title}</strong></p>}
                        <p>{el.Caption}</p>
                    </div>
                )
            })}
        </Container>
    );
};

export default Manygrids;

const Container = styled.div `
    padding-left:10vw;
    padding-right:10vw;
    padding-top:5vh;
    padding-bottom:5vh;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .box{
        text-align:center;
        margin-top:15px;
        margin-bottom:15px;
        img{
            height:120px;
            width:120px;
            margin-bottom:15px;
            object-fit:contain;
            opacity:0.9;
        }
        p{
            margin-bottom:0px;
            strong{
                color:${props=>props.theme.mainRed};
            }
        }
        h3{
            letter-spacing:-2px;
            opacity:0.9;
        }
    }
    @media only screen and (max-width: 768px){
        padding-left:8px;
        padding-right:8px;
        h3{
            font-size: ${({theme})=>theme.fontSizeBigM};
        }
        .box{
            width:90px;
            img{
                width:50px;
                height:50px;
                margin-bottom:0px;
            }
        }
    }
`
const SemiBreak = ({data}) => {
    let prepare = data.split("|");
    return <p>{prepare[0]} <strong>{prepare[1]}</strong></p>
}