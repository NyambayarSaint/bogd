import styled from 'styled-components'
const Button = styled.button`
    font-size: 16px;
    padding:20px 20px;
    letter-spacing: 1px;
    border: ${props => {
        if(props.red) return 'none'
        if(props.dark) return 'none'
    }};
    background: ${props => {
        if(props.red) return props.theme.mainRed;
        if(props.dark) return props.theme.mainDark;
    }};
    color: ${props => {
        if(props.red) return 'white'
        if(props.dark) return 'white'
    }};
    width: ${props => props.width ? props.width : 'auto'};

    svg{
        font-size: 25px;
    }

`;
export default Button