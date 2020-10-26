import styled from "styled-components";

const LinedText = styled.div`
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 4vh;
    color: ${(props) => {
        if (props.red) return props.theme.mainRed;
        if (props.white) return "white";
        else return "black";
    }};
    &:before {
        content: " ";
        width: 50px;
        height: 1px;
        display: inline-block;
        background: ${(props) => {
            if (props.red) return props.theme.mainRed;
            if (props.white) return "white";
            else return "black";
        }};
        margin-right: 15px;
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 768px){
        font-size: ${props=>props.theme.fontSizeM};
    }
`;

export default LinedText;
