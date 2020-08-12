import styled, { css } from 'styled-components';

const Button = styled.button`
color: var(--white);
border: 1px solid ${props => props.borda};
background-color: ${props => props.cor};
box-shadow: 0px 5px 20px -9px var(--zero);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;

${props => props.marginLeft && css`
margin-left: ${props.marginLeft};
margin-bottom: ${props.marginBottom};
`}

&:hover,
&:focus {
    opacity: .5;
}
`

export default Button;