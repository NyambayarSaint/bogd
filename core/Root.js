import "@/core/suneditor.scss";
import "@/core/awesome-slider.scss";
import "@/core/carouselSlider.scss";
import Header from '@/core/Header'
import Footer from '@/core/Footer';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import { useContext } from "react";
import PreSeo from "@/components/miscs/PreSeo";
import styled from "styled-components";

export default function Root({children, noFooter, seo}) {

    const {menu} = useContext(MenuContext);
    const {information} = useContext(MenuContext);

        return (
            <Container>
                <PreSeo seo={seo}/>
                <Header menu={menu || []}/>
                {children}
                <Footer data={information} />
            </Container>
        )
}

const Container = styled.div `
    font-size: ${({theme})=>theme.fontSize};
    font-family: 'Roboto', sans-serif;
    img{
        max-width:100%;
    }
    .Slug{
        padding:30px 15px;
        opacity:0.9;
        text-align:center;
        a{
            text-transform:uppercase;
            font-style:italic;
            color:black;
            &:after{
                content:" / ";
            }
            &:last-child{
                &:after{
                    display:none;
                }
            }
        }
    }
`