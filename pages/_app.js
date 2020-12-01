import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import TagManager from "react-gtm-module";
import Axios from "axios";

class MyApp extends App {
    state = {
        menu: {},
        information: {},
        config: {},
        completelyLoaded: false,
        serverUrl: "http://admin-mn.bogdmotors.mn",
        frontUrl: "http://bogdmotors.mn",
        name: "Богд Моторс ХХК",
        description: `Таван Богд Групп нь 1995 онд Япон улсын “FujiFilm” корпорацийн албан ёсны дистрибьютерийн эрхийг авснаар түүхийн хуудас эхлүүлсэн бөгөөд, 2004 оноос эхлэн ХБНГУ-ын Фольксваген Корпорацийн Монгол дахь албан ёсны төлөөлөгчийн үйл ажиллагааг эрхлэн явуулж байна. Бид Герман чанарыгМонгол орны эрс тэс уур амьсгал болоод шатахууны онцлогт тохируулсан нэмэлт тохиргоотой нь хослуулан дотоодын хэрэглэгчдэд хүргэдгээрээ давуу талтай.`
    };
    async componentDidMount() {
        const res = await Axios.post('/api/base', {query: `query ${queryString}`})
        const config = {width: window.innerWidth, height: window.innerHeight};
        this.setState({ menu: res.data.data.menu, information: res.data.data.setting, config, completelyLoaded: true})
        
        // GOOGLE TAG MANAGER
        const tagManagerArgs = { gtmId: "GTM-WGW757B" };
        TagManager.initialize(tagManagerArgs);
    }

    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <MenuProvider value={this.state}>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </MenuProvider>
            </ThemeProvider>
        );
    }
}

export default MyApp;

const queryString = `
{
    menu {
      Main {
        Title
        page {
          Name
          Slug
        }
        submenu {
          Name
          Slug
        }
      }
      Top{
        Sub{
          Text
        }
        Contact
        ContactUrl
      }
    }
    setting{
      GtmId
      CompanyName
      Social{
        Facebook
        Youtube
        Twitter
        Instagram
        Linkedin
      }
    }
}`;