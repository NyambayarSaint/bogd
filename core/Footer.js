import React from 'react';
import styled from 'styled-components';
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti'

const Footer = ({data}) => {
    return (
        <Container>
            <div id="Footer">
                <div className="top">
                    <div className="row">
                        <div className="col-md-3">
                            <p>{data && data.CompanyName}</p>
                        </div>
                        <div className="col-md-9">
                            <div className="social">
                                <div className="icons">
                                    <div><a href={data && data.Facebook}><TiSocialFacebook /></a></div>
                                    <div><a href={data && data.Youtube}><TiSocialYoutube /></a></div>
                                    <div><a href={data && data.Twitter}><TiSocialTwitter /></a></div>
                                    <div><a href={data && data.Instagram}><TiSocialInstagram /></a></div>
                                    <div><a href={data && data.Linkedin}><TiSocialLinkedin /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.div `
    padding-left:10vw;
    padding-right:10vw;
    border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 15px;
  padding-bottom: 15px;
  .col-md-3{
      display:flex;
      align-items:center;
      p{
          margin:0px;
      }
  }
  .top {
    .col-md-9 {
      .title {
        font-weight: bold;
      }
      button {
        margin-top: 30px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        height: 50px;
        text-align: left;
        padding-left: 30px;
        padding-right: 30px;
        width: 100%;
        &:before {
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          font-family: "Font Awesome 5 Free";
          font-weight: 600;
          content: "\f1e0";
          margin-right: 10px;
        }
      }
      .social {
        .title {
          font-weight: bold;
          opacity: 0.6;
          display: block;
        }
        .icons {
          margin-top: 0px;
          overflow:hidden;
          display:flex;
          flex-direction:row-reverse;
          div {
            height: 50px;
            width: 50px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            font-size: 30px;
            line-height: 50px;
            text-align: center;
            &:first-child {
              margin-right: 0px;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
      padding-left:8px;
      padding-right:8px;
      display:none;
      .col-md-3{
          display:none;
      }
        .icons{
            div{
                height:35px !important;
                width:35px !important;
                line-height:35px !important;
                font-size: 22px !important;
            }
        }
  }
`