import React from "react";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import checkLanguage from "@/components/miscs/checkLanguage";
import styled from "styled-components";
import {Parser} from 'html-to-react';
import minimize from "@/components/miscs/minimize";
import SmBanner from "@/components/SmBannerConstant";
const parser = new Parser();

const Index = ({data}) => {
    console.log(data)
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <Root>
                <SmBanner/>
                <Container>
                    {data.Name && <h1>{data.Name}</h1>}
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={minimize(data.Image, 'small')}/>
                        </div>
                        <div className="col-md-8">
                            <div className="content">{parser.parse(data.Content)}</div>
                        </div>
                    </div>
                </Container>
            </Root>
        </motion.div>
    );
};

export default Index;

export async function getServerSideProps({params, req}){
    let res = await checkLanguage(`/sk-zics?Slug=${params.id}`, req, true);
    return {props: {data: res.data[0]}}
}

const Container = styled.div `
    padding-left:10vw;
    padding-right:10vw;
    h1{
        text-align:center;
        padding-top:5vh;
        padding-bottom:5vh;
        font-weight:bold;
    }
    .row{
        margin-top:5vh;
        margin-bottom:5vh;
    }
`