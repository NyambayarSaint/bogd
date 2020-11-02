import React, { useEffect, useState, useRef } from 'react';
import {Parser} from 'html-to-react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

function useOutsideAlerter(ref, setShow, data, id) {
    useEffect(() => {
        let used = false 
        window.addEventListener('scroll', goScroll);
        
        function goScroll(){
            if(!used){
                let current = document.documentElement.scrollTop
                let head = document.querySelector('#Head').offsetHeight
                let top = document.querySelector('#'+id).nextSibling.getBoundingClientRect().top
                if(current + head > top){
                    goInsert();
                    return used = true
                }
            }
        }
        function goInsert(){
            if(data.TopicID) window.erxesSettings = { knowledgeBase: { topic_id: data.TopicID || '' }, messenger: { brand_id: data.Brand, }};
            else window.erxesSettings = { forms: [{ brand_id: data.Brand || '', form_id: data.Form || '', }], messenger: { brand_id: data.Brand, } };
            var script = document.createElement('script');
            if(data.TopicID) script.src = "https://erxes.tavanbogd.mn/widgets/build/knowledgebaseWidget.bundle.js";
            else script.src = "https://erxes.tavanbogd.mn/widgets/build/formWidget.bundle.js";
            script.async = true;
            var entry = document.querySelector('#erxes-entry2') || document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);
            setShow(true);
        }
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) { if (ref.current && !ref.current.contains(event.target)) setShow(false) }


        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('scroll', goScroll)
        };
    }, [ref]);
}

const Erxessuggestion = ({data}) => {

    const ContentParser = new Parser();
    const [show, setShow] = useState(false);
    const wrapperRef = useRef(null);

    const id = 'el'+Math.floor(Math.random() * 100);

    useOutsideAlerter(wrapperRef, setShow, data, id);

    return (
        <div id={id}>
            <AnimatePresence>
                {show &&
                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <Container>
                        <div className={`box`} ref={wrapperRef}>
                            <div id="erxes-entry2"></div>
                            {ContentParser.parse(data.ErxesDiv)}
                        </div>
                    </Container>
                </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default Erxessuggestion;

const Container = styled.div `
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    left:0px;
    right:0px;
    top:0px;
    bottom:0px;
    background:rgba(0,0,0,0.7);
    z-index:11;
    .box{
        width:50vw;
        padding:2vw;
    }
    @media (max-width: 768px){
        .box{
            width:90vw;
            padding:0;
        }
    }
`
