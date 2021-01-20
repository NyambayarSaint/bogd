import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {CgChevronDown} from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion';
import HamburgerMenu from 'react-hamburger-menu'

const Header = ({menu}) => {

    const {Main} = menu
    const {Top} = menu
    const [height, setHeight] = useState(0);
    const [wrapper, showWrapper] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(()=>{
        setTimeout(()=>setHeight(document.querySelector('#Head').offsetHeight),100)
    },[]);

    const closeHandler = () => {
        setMobile(false)
        showWrapper(false)
    }

    return (
        <Section height={height} mobile={mobile}>
            <Container id="Head">
                <div className="left"><Link href="/"><a><img src="/img/logo.png" /></a></Link></div>
                <div className="right">
                    <div className="top">
                        {Top && Top.Sub && Top.Sub.map(el=><div key={Math.random()} className="sects">{el.Text}</div>)}
                        {Top && Top.Contact && Top.ContactUrl && <div className="active sects"><a href={Top.ContactUrl}>{Top.Contact}</a></div>}
                    </div>
                    <div className="bottom">
                        {Main && Main.length && Main.map(parent=>
                            parent.submenu.length ?
                            <div key={Math.random()} onMouseLeave={closeHandler} onMouseOver={()=>showWrapper(true)} className="parent" onClick={closeHandler}>
                                {parent.Title} <CgChevronDown/>
                                <div className="child-container">
                                    {parent.submenu.map(el=>(
                                        <Link href={'/p/'+el.Slug} key={Math.random()}><a><li onClick={closeHandler}>{el.Name}</li></a></Link>
                                    ))}
                                </div>
                            </div>
                            :
                            <Link href={parent.page.Slug.includes("/") ? parent.page.Slug : '/p/'+parent.page.Slug} key={Math.random()}><a><div className="parent">{parent.Title}</div></a></Link>
                        )}
                    </div>
                </div>
            </Container>
            <div className="mobile-padding"></div>
            <div className="mobile-trigger">
                <Link href="/"><a><img src="/img/logo.png"/></a></Link>
                <HamburgerMenu width={40} height={20} strokeWidth={2} isOpen={mobile} menuClicked={()=>setMobile(!mobile)}/>
            </div>
            <AnimatePresence>
            {wrapper && <motion.div className="wrapper" initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}}></motion.div>}
            </AnimatePresence>
        </Section>
    );
};

export default Header;

const Section = styled.div `
    height: ${({height}) => height && height+'px'};
    .mobile-trigger{
        display:none;
        padding:8px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            height:50px;
        }
    }
    .mobile-padding{
        display:none;
    }
    .wrapper{
        width:100%;
        position:fixed;
        z-index:9;
        background:rgba(0,0,0,0.75);
        top:${({height})=>height}px;
        bottom:0px;
        left:0;
        right:0;
        height:calc(100vh - ${({height})=>height}px);
    }
    @media only screen and (max-width: 768px){
        height: auto !important;
        #Head{
            ${({mobile})=>mobile && `margin-left:0px`};
        }
        .wrapper{
            display:none;
        }
        .mobile-padding{
            display:block;
            height:66px;
            width:100%;
            box-shadow:1px 1px 5px rgba(0,0,0,0.3);
        }
        .mobile-trigger{
            display:flex;
            position: fixed;
            top: 0px;
            z-index: 99;
            background: white;
            width: 100%;
        }
    }
`

const Container = styled.div `
    display:flex;
    justify-content:space-between;
    position:fixed;
    top:0;
    z-index:10;
    background:white;
    .left{
        padding-left:10vw;
        flex:0.2;
        img{
            width:60%;
            height:100%;
            object-fit:contain;
        }
    }
    .right{
        flex:0.8;
        .top{
            font-size:1vw;
            padding-right:10vw;
            display:flex;
            justify-content:space-between;
            position:relative;
            background:${({theme})=>theme.colorOne};
            color:white;
            padding-left:15px;
            line-height: calc(${({theme})=>theme.fontSize} + 1px);
            &:before{
                content: "";
                position: absolute;
                right: 100%;
                border-style: solid;
                border-width: 28px;
                border-color: ${({theme})=>theme.colorOne} ${({theme})=>theme.colorOne} transparent transparent;
                bottom: 0;
                background-color: transparent;
                transition: all 0.3s;
            }
            .sects{
                padding:1vw 0px;
                margin:0px 10px;
            }
            .active{
                background:${({theme})=>theme.colorTwo};
                padding:1vw;
                margin-right:0px;
                a{
                    color:white;
                }
            }
        }
        .bottom{
            padding-right:10vw;
            display:flex;
            justify-content:space-between;
            .parent{
                padding:1vw 15px;
                color:black;
                &:last-child{
                    padding-right:0px;
                }
                svg{
                    position:absolute;
                    margin-top:5px;
                    margin-left:5px;
                }
                &:hover{
                    .child-container{
                        transform:scaleY(1);
                    }
                }
                .child-container{
                    position:absolute;
                    background:white;
                    display:flex;
                    flex-direction:column;
                    padding:7.5px 15px;
                    transform:scaleY(0);
                    margin-top:1vw;
                    border-top:1px solid rgba(0,0,0,0.1);
                    transition:0.3s ease;
                    a{
                        color:black;
                    }
                    li{
                        padding:10px 0px;
                        list-style-type:none;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        flex-direction:column;
        padding-top:15px;
        padding-bottom:15px;
        border-bottom:1px solid rgba(0,0,0,0.1);
        margin-left:100vw;
        transition:0.45s ease;
        width:100%;
        border-top:1px solid rgba(0,0,0,0.1);
        margin-top:66px;
        .left{
            display:none;
        }
        .right{
            .top{
                display:none;
            }
            .bottom{
                padding:0px;
                flex-direction:column;
                .parent{
                    text-align:center;
                    padding:10px 0px;
                    .child-container{
                        position:relative;
                        transform:unset !important;
                        display:none;
                        background:rgba(0,0,0,0.1);
                    }
                    &:hover{
                        .child-container{
                            display:block;
                        }
                    }
                }
            }
        }
    }
`