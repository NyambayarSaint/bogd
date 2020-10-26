import React, { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel'
import { AiOutlineClose } from 'react-icons/ai'
import minimize from '@/miscs/minimize'
import {Parser} from 'html-to-react'
import decrease from '@/miscs/decrease'

const Concept = ({ data }) => {
    let [shown, toggle] = useState({state: false, data: {Title: '', body: '', img: ''}});
    const initParse = new Parser();
    let reactElement = <p>Loading...</p>
    const handler = (obj) => {
        reactElement = initParse.parse(obj.body);
        toggle({state: true, data: {Title: obj.Title, body: reactElement, img: obj.img}});
    }
    return (
        <div className="Concept tabs">
            {shown.state
                ?
                <div className="row review">
                    <div className="col-md-4 offset-1">
                        <img
                            style={{ width: '100%' }}
                            src={minimize(shown.data.img)}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="close" onClick={() => toggle({state: false, data: {Title: '', body: '', img: ''}})}><AiOutlineClose /></div>
                        <h5>{shown.data.Title}</h5>
                        {shown.data.body}
                    </div>
                </div>
                :
                <Carousel
                    slidesPerPage={3}
                    breakpoints={{
                        "768": {
                            slidesPerPage: 1
                        }
                    }}
                >
                    {data.map((el, i)=>{
                        return(
                            <div className="grid" key={'gridkey'+i}>
                                <div className="img"
                                    style={{ backgroundImage: `url(${minimize(el.Image)})` }}
                                ></div>
                                <div className="content">
                                    <h4>{decrease(el.Title, 26)}...</h4>
                                    <p>{decrease(el.Content, 120)}...</p>
                                    <button onClick={() => handler({Title: el.Title, body: el.Content, img: el.Image})} >Read More</button>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            }
        </div>
    );
};

export default Concept;