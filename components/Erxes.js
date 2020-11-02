import React, { useEffect, useState, useRef } from 'react';
import {Parser} from 'html-to-react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

function useOutsideAlerter(ref, setShow, data) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) setShow(false)
        }

        if(data.TopicID) window.erxesSettings = { knowledgeBase: { topic_id: data.TopicID || '' }, messenger: { brand_id: data.Brand, }};
        else window.erxesSettings = { forms: [{ brand_id: data.Brand || '', form_id: data.Form || '', }], messenger: { brand_id: data.Brand, } };
        var script = document.createElement('script');
        if(data.TopicID) script.src = "https://erxes.tavanbogd.mn/widgets/build/knowledgebaseWidget.bundle.js";
        else script.src = "https://erxes.tavanbogd.mn/widgets/build/formWidget.bundle.js";
        script.async = true;
        var entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        setShow(true);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Erxessuggestion = ({data}) => {

    const ContentParser = new Parser();
    const [show, setShow] = useState(false);
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, setShow, data);

    return (
        <AnimatePresence>
            {show &&
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <Container>
                    <div className={`box`} ref={wrapperRef}>
                        {ContentParser.parse(data.ErxesDiv)}
                    </div>
                </Container>
            </motion.div>
            }
        </AnimatePresence>
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
        width:80vw;
        margin-left:10vw;
        padding:2vw;
    }
`
