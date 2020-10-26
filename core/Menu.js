import React, {useState, useEffect} from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import {BsChevronDown} from 'react-icons/bs'

const Menu = ({links}) => {

    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(-1)

    const handleClick = (e) => {
        if(e.target.tabIndex === "x") setOpen(false)
        setOpen(!open)
    }
    const childHandler = (i) => {
        setSubMenu(i)
    }
    useEffect(()=>{
        setSubMenu(-1)
    },[open])
    return (
        <div id="Menu" className={open ? 'active' : ''}>
            <div className="toggle">
                <span onClick={handleClick}>MENU</span>
                <HamburgerMenu
                    isOpen={open}
                    width={28}
                    height={22}
                    menuClicked={handleClick}
                    strokeWidth={1}
                    rotate={0}
                    color={open?'black':'white'}
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
            <div className={`content ${open ? 'active' : ''}`} >
                <div className="middle">
                    {open ? 
                        <motion.div initial={{ opacity: 0, x:60 }} animate={{ opacity: 1, x:0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
                            {links ? links.map((el,i)=>{
                                return(
                                    <div key={'fr'+i}>
                                        {el.Submenu.length ? 
                                        <div key={i+'normal'} onClick={()=>childHandler(i)} >
                                            <div className="parent">
                                                <div className="parent-title">{el.Title}{i===subMenu ? <BsChevronDown style={{animationName: 'bounce'}}/>:<BsChevronDown/>}</div>
                                                    {i === subMenu ? 
                                                    <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
                                                        <div className="child-con selectchild">
                                                            {el.Submenu.length ? el.Submenu.map((ch,k)=><Link href={ch.Path ? ch.Path : ''} key={k}><a><span onClick={handleClick} tabIndex="x" className="child">- {ch.Title}</span></a></Link>) : null}
                                                        </div>
                                                    </motion.div>
                                                    :null}
                                            </div>
                                        </div>
                                        :
                                        <Link href={el.Path} key={i}>
                                            <a target={el.Path.includes('.') ? "_blank" : ""}>
                                                <div className="parent" onClick={()=>setOpen(false)}>
                                                    <div className="parent-title">{el.Title}</div>
                                                </div>
                                            </a>
                                        </Link>
                                        }
                                    </div>
                                )
                                
                            }) : null}
                        </motion.div>
                    : null}
                </div>
            </div>
        </div>
    );
};

export default Menu;