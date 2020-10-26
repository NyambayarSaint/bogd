import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import checkLanguage from './miscs/checkLanguage';
import {AiFillEye} from 'react-icons/ai';
import minimize from './miscs/minimize';

const Volkswagen = ({data}) => {

    const [cars, setCars] = useState(null);

    useEffect(()=>{
        goLoad();
    },[])

    const goLoad = async () => {
        let res = await checkLanguage(`/cars`, null, true);
        let suv = res.data.filter(car=>car.Type==="SUV");
        let sedan = res.data.filter(car=>car.Type==="Sedan");
        setCars({suv,sedan});
    }
    return (
        <Container>
            <h2>{data.Title}</h2>

            {/* CON */}
            {!cars ?
                <p style={{textAlign:'center'}}>Loading...</p>
            :
            <>
                <div className="row">
                    {cars.sedan.map(car=>(
                        <div className="col-md-4 piece" key={Math.random()}>
                            <div className="box">
                                <div className="absolutetext">{car.Name}</div>
                                <div className="normalimg"><img src={minimize(car.List.Image, 'small')}/></div>
                                <div className="hoverimg"><img src={minimize(car.List.Image2, 'small')}/></div>
                                <p>{car.List.Title}</p>
                                <p><strong>{car.List.Text}</strong></p>
                                {car.Page && <Link href={`/p/${car.Page.Slug}`}><a><div className="exp"><AiFillEye/>{data.Readmore}</div></a></Link>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {cars.suv.map(car=>(
                        <div className="col-md-4 piece" key={Math.random()}>
                            <div className="box">
                                <div className="absolutetext">{car.Name}</div>
                                <div className="normalimg"><img src={minimize(car.List.Image, 'small')}/></div>
                                <div className="hoverimg"><img src={minimize(car.List.Image2, 'small')}/></div>
                                <p>{car.List.Title}</p>
                                <p><strong>{car.List.Text}</strong></p>
                                {car.Page && <Link href={`/p/${car.Page.Slug}`}><a><div className="exp"><AiFillEye/>{data.Readmore}</div></a></Link>}
                            </div>
                        </div>
                    ))}
                </div>
            </>
            }
            {/* END CON */}

        </Container>
    );
};

export default Volkswagen;

const Container = styled.div `
    padding-left:10vw;
    padding-right:10vw;
    margin-top:5vh;
    margin-bottom:5vh;
    h2{
        border-bottom:3px solid ${({theme})=>theme.colorTwo};
        display:inline-block;
        font-weight:bold;
        padding-bottom:5px;
        margin-bottom:30px;
    }
    .piece {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    &:last-child {
      border-right: none;
    }
    .box {
      overflow: hidden;
      p {
        margin-bottom: 5px;
      }
      .exp {
        font-weight: bold;
        color: $light-blue;
        svg {
          margin-right: 7px;
        }
      }
      .absolutetext {
        position: absolute;
        z-index: -1;
        font-family: "Kanit", sans-serif;
        letter-spacing: 2px;
        font-size: 2rem;
        opacity: 0.5;
      }
      img {
        width: 100%;
      }
      .hoverimg {
        display: none;
        img {
        }
      }
      &:hover {
        .hoverimg {
          display: block;
        }
        .normalimg {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
      padding-left:8px;
      padding-right:8px;
      h2{
          font-size: ${({theme})=>theme.fontSizeMedium};
          display:block;
          text-align:center;
      }
      .row{
        margin:0px;
        .piece{
            margin-bottom:0px;
            .box{
                text-align:center;
                border-bottom:1px solid rgba(0,0,0,0.1);
                padding:15px 0px;
                .absolutetext{
                    font-size: ${({theme})=>theme.fontSize};
                    position:relative;
                }
            }
        }
      }
      
  }
`