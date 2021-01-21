import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import checkLanguage from './miscs/checkLanguage';
import decrease from './miscs/decrease';
import minimize from './miscs/minimize';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import {WiDaySnowWind} from 'react-icons/wi'

const Teins = () => {

    const [data, setData] = useState(null);
    useEffect(()=>{
        goLoad()
    },[])

    const goLoad = async () => {
        let res = await checkLanguage('/hankooks', null, true)
        setData(res.data);
    }
    console.log(data)
    return (
        <Container>
                {!data ? 'Loading...' :
                    data.map(el=>(
                        <div className="entry" key={Math.random()} >
                            <Link href={`/hankooks/${el.Slug}`}><a><div className="img" style={{backgroundImage: `url(${minimize(el.Thumb)})`}}></div></a></Link>
                            <div className="content">
                                <strong>{el.Name}</strong>
                                <p>{decrease(el.Description, 160)}...</p>
                                <div className="s-con">
                                    {el.FourSeason ? <div className="seasons season"><WiDaySnowWind/> 4 Season</div> : null}
                                    {el.Summer ? <div className="seasons summer"><FaLeaf/> Зун</div> : null}
                                    {el.Winter ? <div className="seasons winter"><FaSnowflake/> Өвөл</div> : null}
                                </div>
                                <Link href={`/hankooks/${el.Slug}`}>
                                    <a>View Tires <AiOutlineDoubleRight/></a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
        </Container>
    );
};

export default Teins;

const Container = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    margin-top: 5vh;
    .main-title {
        text-align: center;
    }
    .main-img {
        height: 150px;
        display: block;
        margin: 0px auto;
    }
    .entry {
        display: flex;
        position: relative;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        .img {
            width: 150px;
            min-width: 150px;
            max-width: 150px;
            height: 150px;
            min-height: 150px;
            max-height: 150px;
            background-position: top center;
            background-size: cover;
            margin-right: 45px;
        }
        p {
            padding-right: 100px;
        }
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            strong {
                display: block;
                margin-bottom: 0.6rem;
            }
            .s-con {
                display: flex;
                .seasons {
                    color: white;
                    padding: 5px 10px;
                    width: fit-content;
                    width: -moz-fit-content;
                    margin-right: 15px;
                    font-size: $fs-small;
                }
                .summer {
                    background-color: $main-green;
                }
                .winter {
                    background-color: $main-grey;
                }
                .season {
                    background-color: #e1660b;
                }
            }
            a {
                position: absolute;
                right: 0;
                svg {
                    margin-top: -2px;
                }
            }
        }
    }
    @media only screen and (max-width: 768px) {
        padding-left: 8px;
        padding-right: 8px;
    }
`;
