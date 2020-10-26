import React from "react";
import styled from "styled-components";
import minimize from "./miscs/minimize";

const Grid2 = ({data}) => {
    let {Grids} = data
    return (
        <Container className="container">
            <div className="top row">
                {Grids.map((el,i)=>{
                    return(
                        <div key={'grid2'+i} className="col-md-6 flexes">
                            <img src={minimize(el.Image, 'medium')} />
                            <div>
                                <h4>{el.Title && el.Title}</h4>
                                <p>{el.Description && el.Description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
};

export default Grid2;

const Container = styled.div`
    padding-top:10vh;
    padding-bottom:10vh;
    .title{
        margin-bottom:10vh;
        div{
            width:100%;
            overflow:hidden;
            display:flex;
            align-items:center;
            img{
                width:60px;
                float:left;
                margin-right:15px;
            }
            p{
                float:left;
            }
        }
    }
    .top{
        .flexes{
            display:flex;
            h4{
                color:${props=>props.theme.mainRed};
            }
            img{
                width:80px;
                height:80px;
                padding:15px;
                margin-right:15px;
                opacity:0.6;
            }
        }
    }
`;
