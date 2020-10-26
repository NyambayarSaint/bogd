import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import checkLanguage from './miscs/checkLanguage';
import decrease from './miscs/decrease';
import minimize from './miscs/minimize';

const Teins = () => {

    const [data, setData] = useState(null);
    useEffect(()=>{
        goLoad()
    },[])

    const goLoad = async () => {
        let res = await checkLanguage('/sk-zics', null, true)
        setData(res.data);
    }
    console.log(data)
    return (
        <Container>
            <div className="row">
                {!data ? 'Loading...' :
                    data.map(el=>(
                        <div className="col-md-4" key={Math.random()}>
                            <Link href={'/skzics/'+el.Slug}>
                                <a>
                                    <div className="box">
                                        <div className="img" style={{backgroundImage: `url(${minimize(el.Image,'medium')})`}}></div>
                                        <div className="text">
                                            <span>{decrease(el.Name, 20)}...</span>
                                            <p>{decrease(el.Content, 120)}...</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default Teins;

const Container = styled.div`
    padding-left:10vw;
    padding-right:10vw;
    .main-title {
        text-align: center;
    }
    .main-img {
        height: 150px;
        display: block;
        margin: 0px auto;
    }
    .box {
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom:30px;
        .img {
            width: 100%;
            height: 350px;
            background-size: auto 100%;
            background-position: center center;
            background-repeat: no-repeat;
            border-bottom: 60px solid rgba(0, 0, 0, 0);
            box-sizing: content-box;
        }
        .text {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            height: 60px;
            text-align: center;
            position: absolute;
            width: 100%;
            bottom: 0px;
            transition: 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 15px;
            &:after {
                display: inline-block;
                font-style: normal;
                font-variant: normal;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                font-family: "Font Awesome 5 Free";
                font-weight: 600;
                content: "\f105";
                position: absolute;
                right: 15px;
                bottom: 9px;
                border: 1px solid white;
                padding: 8px 15px;
                border-radius: 50%;
                opacity: 0;
            }
            span {
                font-size: 24px;
                font-weight: bold;
                line-height:22px;
            }
            p {
                overflow: hidden;
                height: 0px;
                margin-top: 0px;
                margin-bottom: 0px;
                opacity: 0;
                transition: 0.5s ease;
            }
        }
        &:hover {
            cursor: pointer;
            .text {
                height: calc(350px + 60px);
                &:after {
                    opacity: 1;
                }
            }
            p {
                margin-top: 10px;
                height: 96px;
                opacity: 1;
            }
        }
    }
    @media only screen and (max-width: 768px){
        padding-left:8px;
        padding-right:8px;
        .box{
            .img{
                height:200px;
            }
            .text{
                padding:8px 15px;
                height:auto !important;
                span{
                    font-size:${({theme})=>theme.fontSize};
                }
            }
        }
    }
`;
